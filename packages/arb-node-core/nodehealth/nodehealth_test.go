package nodehealth

import (
	"errors"
	"fmt"
	"github.com/heptiolabs/healthcheck"
	"math/big"
	"net/http"
	"nodehealth"
	"time"
)

type configTestStruct struct {
	successfulStatus  int
	largeBufferSize   int
	readinessEndpoint string
	failMessage       string
	passMessage       string
	startUpSleepTime  time.Duration
	timeDelayTests    time.Duration
	nodehealthAddress string
	inboxReaderName   string
}

func (config *configTestStruct) loadTestConfig() {
	//Configuration constants
	const successfulStatus = 200
	const largeBufferSize = 200
	const readinessEndpoint = "/ready"
	const failMessage = "Failed"
	const passMessage = "Passed"
	const startUpSleepTime = 5 * time.Second
	const timeDelayTests = 11 * time.Second
	const nodehealthAddress = "http://127.0.0.1:8080"
	const inboxReaderName = "InboxReader"

	config.successfulStatus = successfulStatus
	config.largeBufferSize = largeBufferSize
	config.readinessEndpoint = readinessEndpoint
	config.failMessage = failMessage
	config.passMessage = passMessage
	config.startUpSleepTime = startUpSleepTime
	config.timeDelayTests = timeDelayTests
	config.nodehealthAddress = nodehealthAddress
	config.inboxReaderName = inboxReaderName
}

func startTestingServerFail() {
	health := healthcheck.NewHandler()
	httpMux := http.NewServeMux()

	//Readiness check that always fails
	health.AddReadinessCheck("failing-check", func() error {
		return fmt.Errorf("example failure")
	})

	//Create an endpoint to serve the readiness check
	httpMux.HandleFunc("/ready", health.ReadyEndpoint)

	http.ListenAndServe("0.0.0.0:8088", httpMux)
}

func startTestingServerPass() {
	health := healthcheck.NewHandler()
	httpMux := http.NewServeMux()

	//Readiness check that always fails
	health.AddReadinessCheck("pass-check", func() error {
		return nil
	})

	//Create an endpoint to serve the readiness check
	httpMux.HandleFunc("/ready", health.ReadyEndpoint)

	http.ListenAndServe("0.0.0.0:8089", httpMux)
}

func startUpTest(config *configTestStruct) error {
	fmt.Println("Startup delay")
	time.Sleep(config.startUpSleepTime)
	_, err := http.Get(config.nodehealthAddress + config.readinessEndpoint)
	if err != nil {
		fmt.Println(config.passMessage)
	} else {
		fmt.Println(config.failMessage)
		return errors.New("Failed startup delay test - exiting")
	}
	fmt.Println("")
	return nil
}

func aSyncTest(healthChan chan nodehealth.Log, config *configTestStruct) error {
	fmt.Println("Test Removing Primary aSync")
	healthChan <- nodehealth.Log{Config: true, Var: "openethereumHealthcheckRPC", ValStr: "http://127.0.0.1:8089"}
	time.Sleep(config.timeDelayTests)

	//Test server response
	res, err := http.Get(config.nodehealthAddress + config.readinessEndpoint)
	if err != nil {
		fmt.Println(err)
		return err
	}
	if res.StatusCode != config.successfulStatus {
		//The server is returning an unexpected status code
		fmt.Println(config.failMessage)
		return errors.New("Failed test without primary - exiting")
	}
	fmt.Println(config.passMessage)
	fmt.Println("")
	return nil
}

func openEthereumFailure(healthChan chan nodehealth.Log, config *configTestStruct) error {
	fmt.Println("Failing OpenEthereum Node Test")
	healthChan <- nodehealth.Log{Config: true, Var: "openethereumHealthcheckRPC", ValStr: "http://127.0.0.1:8088"}
	time.Sleep(config.timeDelayTests)
	//Test server response
	res, err := http.Get(config.nodehealthAddress + "/ready")
	if err != nil {
		fmt.Println(err)
		return err
	}
	if res.StatusCode == config.successfulStatus {
		//The server is returning an unexpected status code
		fmt.Println(config.failMessage)
		return errors.New("Failed test of OpenEthereum failure - exiting")
	}
	fmt.Println(config.passMessage)
	fmt.Println("")
	return nil
}

func addPrimaryWhileRunning(healthChan chan nodehealth.Log, config *configTestStruct) error {
	fmt.Println("Adding Primary Late Test")
	healthChan <- nodehealth.Log{Config: true, Var: "primaryHealthcheckRPC", ValStr: "http://127.0.0.1:8089"}
	healthChan <- nodehealth.Log{Config: true, Var: "openethereumHealthcheckRPC", ValStr: "http://127.0.0.1:8089"}
	time.Sleep(config.timeDelayTests)

	//Test server response
	res, err := http.Get(config.nodehealthAddress + config.readinessEndpoint)
	if err != nil {
		return err
	}
	if res.StatusCode != config.successfulStatus {
		//The server is returning an unexpected status code
		fmt.Println(config.failMessage)
		return errors.New("Failed adding primary while running test - exiting")
	}
	healthChan <- nodehealth.Log{Config: true, Var: "primaryHealthcheckRPC", ValStr: "http://127.0.0.1:8088"}
	time.Sleep(config.timeDelayTests)

	//Test server response
	res, err = http.Get(config.nodehealthAddress + config.readinessEndpoint)
	if err != nil {
		fmt.Println(err)
		return err
	}
	if res.StatusCode == config.successfulStatus {
		//The server is returning an unexpected status code
		fmt.Println(config.failMessage)
		return errors.New("Failed adding primary while running test - exiting")
	} else {
		fmt.Println(config.passMessage)
	}
	fmt.Println("")
	return nil
}

func inboxReaderTest(healthChan chan nodehealth.Log, config *configTestStruct) error {
	fmt.Println("Test InboxReader blockStatus")
	healthChan <- nodehealth.Log{Config: true, Var: "primaryHealthcheckRPC", ValStr: "http://127.0.0.1:8089"}
	time.Sleep(config.timeDelayTests)
	const largeBigInt = 20
	testBigInt := big.NewInt(largeBigInt)
	healthChan <- nodehealth.Log{Comp: config.inboxReaderName, Var: "currentHeight", ValBigInt: *testBigInt}
	healthChan <- nodehealth.Log{Comp: config.inboxReaderName, Var: "caughtUpTarget", ValBigInt: *testBigInt}
	healthChan <- nodehealth.Log{Comp: config.inboxReaderName, Var: "arbCorePosition", ValBigInt: *testBigInt}
	healthChan <- nodehealth.Log{Comp: config.inboxReaderName, Var: "getNextBlockToRead", ValBigInt: *testBigInt}

	//Test server response
	res, err := http.Get(config.nodehealthAddress + config.readinessEndpoint)
	if err != nil {
		fmt.Println(err)
		return err
	}
	if res.StatusCode != config.successfulStatus {
		fmt.Println(config.failMessage)
		//The server is returning an unexpected status code
		return errors.New("Failed inbox reader test - exiting")
	}

	const smallBigInt = 10
	blockTest := big.NewInt(smallBigInt)
	healthChan <- nodehealth.Log{Comp: config.inboxReaderName, Var: "currentHeight", ValBigInt: *blockTest}
	healthChan <- nodehealth.Log{Comp: config.inboxReaderName, Var: "caughtUpTarget", ValBigInt: *testBigInt}
	time.Sleep(config.timeDelayTests)

	//Test server response
	res, err = http.Get(config.nodehealthAddress + config.readinessEndpoint)
	if err != nil {
		fmt.Println(err)
		return err
	}
	if res.StatusCode == config.successfulStatus {
		//The server is returning an unexpected status code
		fmt.Println(config.failMessage)
		return errors.New("Failed inbox reader test - exiting")
	} else {
		fmt.Println(config.passMessage)
	}
	return nil
}

func nodeHealthTest() error {
	config := configTestStruct{}
	config.loadTestConfig()

	//Generate sample servers for testing
	go startTestingServerFail()
	go startTestingServerPass()

	healthChan := make(chan nodehealth.Log, config.largeBufferSize)
	go nodehealth.NodeHealthCheck(healthChan)

	//Test startup configuration delay
	err := startUpTest(&config)
	if err != nil {
		return err
	}

	//Primary aSync Test
	err = aSyncTest(healthChan, &config)
	if err != nil {
		return err
	}

	//Test failing OpenEthereum Node
	err = openEthereumFailure(healthChan, &config)
	if err != nil {
		return err
	}

	//Test adding primary after start
	err = addPrimaryWhileRunning(healthChan, &config)
	if err != nil {
		return err
	}

	//Test InboxReader block status check
	err = inboxReaderTest(healthChan, &config)
	if err != nil {
		return err
	}

	return nil
}
