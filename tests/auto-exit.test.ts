import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { Executed } from "../generated/schema"
import { Executed as ExecutedEvent } from "../generated/AutoExit/AutoExit"
import { handleExecuted } from "../src/auto-exit"
import { createExecutedEvent } from "./auto-exit-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(234)
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let isSwap = "boolean Not implemented"
    let amountReturned0 = BigInt.fromI32(234)
    let amountReturned1 = BigInt.fromI32(234)
    let token0 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let token1 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newExecutedEvent = createExecutedEvent(
      tokenId,
      account,
      isSwap,
      amountReturned0,
      amountReturned1,
      token0,
      token1
    )
    handleExecuted(newExecutedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Executed created and stored", () => {
    assert.entityCount("Executed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Executed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "Executed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Executed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isSwap",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "Executed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountReturned0",
      "234"
    )
    assert.fieldEquals(
      "Executed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountReturned1",
      "234"
    )
    assert.fieldEquals(
      "Executed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token0",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Executed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token1",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
