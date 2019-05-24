const TEST_PASSED = "Test passed: ";
const TEST_FAILED = "Test failed: ";
const errorMessage = (expected, actual) => `Expected '${expected.toString()}' to be ${expected}. Received ${actual}`

module.exports = {
  TEST_PASSED,
  TEST_FAILED
}
