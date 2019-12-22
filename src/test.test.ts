import assert from "assert"
import Test from "./test";

describe('Test', () => {

  let helper: Test

  before(async () => {
    helper = new Test()
  })

  it('say', async () => {
    try {
      const result = await helper.say(`Hello World`)
      assert.strictEqual(result, `Hello World`)
    } catch (err) {
      console.error(err)
      assert.throws(() => {}, err)
    }
  })
})

