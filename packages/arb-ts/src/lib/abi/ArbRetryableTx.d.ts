/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface ArbRetryableTxInterface extends ethers.utils.Interface {
  functions: {
    'cancel(bytes32)': FunctionFragment
    'getBeneficiary(bytes32)': FunctionFragment
    'getKeepalivePrice(bytes32)': FunctionFragment
    'getLifetime()': FunctionFragment
    'getSubmissionPrice(uint256)': FunctionFragment
    'getTimeout(bytes32)': FunctionFragment
    'keepalive(bytes32)': FunctionFragment
    'redeem(bytes32)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'cancel', values: [BytesLike]): string
  encodeFunctionData(
    functionFragment: 'getBeneficiary',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getKeepalivePrice',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getLifetime',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getSubmissionPrice',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'getTimeout',
    values: [BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'keepalive', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'redeem', values: [BytesLike]): string

  decodeFunctionResult(functionFragment: 'cancel', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getBeneficiary',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getKeepalivePrice',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getLifetime', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getSubmissionPrice',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getTimeout', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'keepalive', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result

  events: {
    'Canceled(bytes32)': EventFragment
    'LifetimeExtended(bytes32,uint256)': EventFragment
    'Redeemed(bytes32)': EventFragment
    'TicketCreated(bytes32)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Canceled'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'LifetimeExtended'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Redeemed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TicketCreated'): EventFragment
}

export class ArbRetryableTx extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ArbRetryableTxInterface

  functions: {
    cancel(
      ticketId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'cancel(bytes32)'(
      ticketId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    'getBeneficiary(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    'getKeepalivePrice(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getLifetime(overrides?: CallOverrides): Promise<[BigNumber]>

    'getLifetime()'(overrides?: CallOverrides): Promise<[BigNumber]>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    'getSubmissionPrice(uint256)'(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'getTimeout(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    keepalive(
      ticketId: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'keepalive(bytes32)'(
      ticketId: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    redeem(txId: BytesLike, overrides?: Overrides): Promise<ContractTransaction>

    'redeem(bytes32)'(
      txId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  cancel(
    ticketId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'cancel(bytes32)'(
    ticketId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getBeneficiary(
    ticketId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  'getBeneficiary(bytes32)'(
    ticketId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  getKeepalivePrice(
    ticketId: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>

  'getKeepalivePrice(bytes32)'(
    ticketId: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>

  getLifetime(overrides?: CallOverrides): Promise<BigNumber>

  'getLifetime()'(overrides?: CallOverrides): Promise<BigNumber>

  getSubmissionPrice(
    calldataSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>

  'getSubmissionPrice(uint256)'(
    calldataSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>

  getTimeout(ticketId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

  'getTimeout(bytes32)'(
    ticketId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  keepalive(
    ticketId: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'keepalive(bytes32)'(
    ticketId: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  redeem(txId: BytesLike, overrides?: Overrides): Promise<ContractTransaction>

  'redeem(bytes32)'(
    txId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    cancel(ticketId: BytesLike, overrides?: CallOverrides): Promise<void>

    'cancel(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'getBeneficiary(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    'getKeepalivePrice(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getLifetime(overrides?: CallOverrides): Promise<BigNumber>

    'getLifetime()'(overrides?: CallOverrides): Promise<BigNumber>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    'getSubmissionPrice(uint256)'(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getTimeout(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    keepalive(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'keepalive(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    redeem(txId: BytesLike, overrides?: CallOverrides): Promise<void>

    'redeem(bytes32)'(txId: BytesLike, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    Canceled(ticketId: BytesLike | null): EventFilter

    LifetimeExtended(ticketId: BytesLike | null, newTimeout: null): EventFilter

    Redeemed(ticketId: BytesLike | null): EventFilter

    TicketCreated(ticketId: BytesLike | null): EventFilter
  }

  estimateGas: {
    cancel(ticketId: BytesLike, overrides?: Overrides): Promise<BigNumber>

    'cancel(bytes32)'(
      ticketId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getBeneficiary(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getKeepalivePrice(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getLifetime(overrides?: CallOverrides): Promise<BigNumber>

    'getLifetime()'(overrides?: CallOverrides): Promise<BigNumber>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getSubmissionPrice(uint256)'(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getTimeout(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    keepalive(
      ticketId: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'keepalive(bytes32)'(
      ticketId: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    redeem(txId: BytesLike, overrides?: Overrides): Promise<BigNumber>

    'redeem(bytes32)'(
      txId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    cancel(
      ticketId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'cancel(bytes32)'(
      ticketId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getBeneficiary(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getKeepalivePrice(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getLifetime(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getLifetime()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getSubmissionPrice(uint256)'(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getTimeout(bytes32)'(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    keepalive(
      ticketId: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'keepalive(bytes32)'(
      ticketId: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    redeem(
      txId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'redeem(bytes32)'(
      txId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
