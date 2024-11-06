import {
  Executed as ExecutedEvent,
  OperatorChanged as OperatorChangedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PositionConfigured as PositionConfiguredEvent,
  Swap as SwapEvent,
  TWAPConfigChanged as TWAPConfigChangedEvent,
  WithdrawerChanged as WithdrawerChangedEvent
} from "../generated/AutoExit/AutoExit"
import {
  Executed,
  OperatorChanged,
  OwnershipTransferStarted,
  OwnershipTransferred,
  PositionConfigured,
  Swap,
  TWAPConfigChanged,
  WithdrawerChanged
} from "../generated/schema"

export function handleExecuted(event: ExecutedEvent): void {
  let entity = new Executed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.account = event.params.account
  entity.isSwap = event.params.isSwap
  entity.amountReturned0 = event.params.amountReturned0
  entity.amountReturned1 = event.params.amountReturned1
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorChanged(event: OperatorChangedEvent): void {
  let entity = new OperatorChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newOperator = event.params.newOperator
  entity.active = event.params.active

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePositionConfigured(event: PositionConfiguredEvent): void {
  let entity = new PositionConfigured(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.isActive = event.params.isActive
  entity.token0Swap = event.params.token0Swap
  entity.token1Swap = event.params.token1Swap
  entity.token0TriggerTick = event.params.token0TriggerTick
  entity.token1TriggerTick = event.params.token1TriggerTick
  entity.token0SlippageX64 = event.params.token0SlippageX64
  entity.token1SlippageX64 = event.params.token1SlippageX64
  entity.onlyFees = event.params.onlyFees
  entity.maxRewardX64 = event.params.maxRewardX64

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTWAPConfigChanged(event: TWAPConfigChangedEvent): void {
  let entity = new TWAPConfigChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.TWAPSeconds = event.params.TWAPSeconds
  entity.maxTWAPTickDifference = event.params.maxTWAPTickDifference

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawerChanged(event: WithdrawerChangedEvent): void {
  let entity = new WithdrawerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newWithdrawer = event.params.newWithdrawer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
