import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Executed,
  OperatorChanged,
  OwnershipTransferStarted,
  OwnershipTransferred,
  PositionConfigured,
  Swap,
  TWAPConfigChanged,
  WithdrawerChanged
} from "../generated/AutoExit/AutoExit"

export function createExecutedEvent(
  tokenId: BigInt,
  account: Address,
  isSwap: boolean,
  amountReturned0: BigInt,
  amountReturned1: BigInt,
  token0: Address,
  token1: Address
): Executed {
  let executedEvent = changetype<Executed>(newMockEvent())

  executedEvent.parameters = new Array()

  executedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  executedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  executedEvent.parameters.push(
    new ethereum.EventParam("isSwap", ethereum.Value.fromBoolean(isSwap))
  )
  executedEvent.parameters.push(
    new ethereum.EventParam(
      "amountReturned0",
      ethereum.Value.fromUnsignedBigInt(amountReturned0)
    )
  )
  executedEvent.parameters.push(
    new ethereum.EventParam(
      "amountReturned1",
      ethereum.Value.fromUnsignedBigInt(amountReturned1)
    )
  )
  executedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  executedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )

  return executedEvent
}

export function createOperatorChangedEvent(
  newOperator: Address,
  active: boolean
): OperatorChanged {
  let operatorChangedEvent = changetype<OperatorChanged>(newMockEvent())

  operatorChangedEvent.parameters = new Array()

  operatorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOperator",
      ethereum.Value.fromAddress(newOperator)
    )
  )
  operatorChangedEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return operatorChangedEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent = changetype<OwnershipTransferStarted>(
    newMockEvent()
  )

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPositionConfiguredEvent(
  tokenId: BigInt,
  isActive: boolean,
  token0Swap: boolean,
  token1Swap: boolean,
  token0TriggerTick: i32,
  token1TriggerTick: i32,
  token0SlippageX64: BigInt,
  token1SlippageX64: BigInt,
  onlyFees: boolean,
  maxRewardX64: BigInt
): PositionConfigured {
  let positionConfiguredEvent = changetype<PositionConfigured>(newMockEvent())

  positionConfiguredEvent.parameters = new Array()

  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "token0Swap",
      ethereum.Value.fromBoolean(token0Swap)
    )
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "token1Swap",
      ethereum.Value.fromBoolean(token1Swap)
    )
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "token0TriggerTick",
      ethereum.Value.fromI32(token0TriggerTick)
    )
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "token1TriggerTick",
      ethereum.Value.fromI32(token1TriggerTick)
    )
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "token0SlippageX64",
      ethereum.Value.fromUnsignedBigInt(token0SlippageX64)
    )
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "token1SlippageX64",
      ethereum.Value.fromUnsignedBigInt(token1SlippageX64)
    )
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam("onlyFees", ethereum.Value.fromBoolean(onlyFees))
  )
  positionConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "maxRewardX64",
      ethereum.Value.fromUnsignedBigInt(maxRewardX64)
    )
  )

  return positionConfiguredEvent
}

export function createSwapEvent(
  tokenIn: Address,
  tokenOut: Address,
  amountIn: BigInt,
  amountOut: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("tokenIn", ethereum.Value.fromAddress(tokenIn))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tokenOut", ethereum.Value.fromAddress(tokenOut))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )

  return swapEvent
}

export function createTWAPConfigChangedEvent(
  TWAPSeconds: BigInt,
  maxTWAPTickDifference: i32
): TWAPConfigChanged {
  let twapConfigChangedEvent = changetype<TWAPConfigChanged>(newMockEvent())

  twapConfigChangedEvent.parameters = new Array()

  twapConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "TWAPSeconds",
      ethereum.Value.fromUnsignedBigInt(TWAPSeconds)
    )
  )
  twapConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "maxTWAPTickDifference",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(maxTWAPTickDifference))
    )
  )

  return twapConfigChangedEvent
}

export function createWithdrawerChangedEvent(
  newWithdrawer: Address
): WithdrawerChanged {
  let withdrawerChangedEvent = changetype<WithdrawerChanged>(newMockEvent())

  withdrawerChangedEvent.parameters = new Array()

  withdrawerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newWithdrawer",
      ethereum.Value.fromAddress(newWithdrawer)
    )
  )

  return withdrawerChangedEvent
}
