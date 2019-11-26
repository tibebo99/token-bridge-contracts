package ethbridge

import (
	"math/big"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/offchainlabs/arbitrum/packages/arb-util/protocol"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/ethbridge/onestepproof"
	errors2 "github.com/pkg/errors"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

type OneStepProof struct {
	contract *onestepproof.OneStepProof
	client   *ethclient.Client
}

func NewOneStepProof(address common.Address, client *ethclient.Client) (*OneStepProof, error) {
	contract, err := onestepproof.NewOneStepProof(address, client)
	if err != nil {
		return nil, errors2.Wrap(err, "Failed to connect to ArbLauncher")
	}

	return &OneStepProof{contract, client}, nil
}

func (con *OneStepProof) ValidateProof(
	auth *bind.CallOpts,
	precondition *protocol.Precondition,
	assertion *protocol.AssertionStub,
	proof []byte,
) (*big.Int, error) {
	return con.contract.ValidateProof(
		auth,
		[7][32]byte{
			precondition.BeforeHashValue(),
			precondition.BeforeInboxValue(),
			assertion.AfterHashValue(),
			assertion.FirstMessageHashValue(),
			assertion.LastMessageHashValue(),
			assertion.FirstLogHashValue(),
			assertion.LastLogHashValue(),
		},
		[2]uint64{precondition.TimeBounds.StartTime, precondition.TimeBounds.EndTime},
		proof,
	)
}
