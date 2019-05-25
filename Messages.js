const TEST_PASSED = "Test passed: Checks ";
const TEST_FAILED = "Test failed: Checks ";
const BLANK = " ";
const TEST_SUITE = "Test suite: ";
const DIVIDER = "=================================================";
const errorMessage = (expected, actual) => `Expected result to be '${actual}'. Instead, value evaluates as '${expected}'`

module.exports = {
  TEST_PASSED,
  TEST_FAILED,
  BLANK,
  TEST_SUITE,
  DIVIDER,
  errorMessage
}
