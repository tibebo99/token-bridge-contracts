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
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface ITradeableExitReceiverInterface extends ethers.utils.Interface {
  functions: {
    'onExitTransfer(address,uint256,bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'onExitTransfer',
    values: [string, BigNumberish, BytesLike]
  ): string

  decodeFunctionResult(
    functionFragment: 'onExitTransfer',
    data: BytesLike
  ): Result

  events: {}
}

export class ITradeableExitReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ITradeableExitReceiverInterface

  functions: {
    onExitTransfer(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'onExitTransfer(address,uint256,bytes)'(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  onExitTransfer(
    sender: string,
    exitNum: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'onExitTransfer(address,uint256,bytes)'(
    sender: string,
    exitNum: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    onExitTransfer(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>

    'onExitTransfer(address,uint256,bytes)'(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>
  }

  filters: {}

  estimateGas: {
    onExitTransfer(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'onExitTransfer(address,uint256,bytes)'(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    onExitTransfer(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'onExitTransfer(address,uint256,bytes)'(
      sender: string,
      exitNum: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
