const message = require( './Messages');
let ConsoleDisplay = require('./ConsoleDisplay');

let currentTestDescription = null
let consoleDisplay = new ConsoleDisplay();
let testedCondition = null

const describe = (testDescription, callback) => {
  callback();
}
const tests = (testDescription, callback) => {
  currentTestDescription = testDescription;
  callback();
}

const expect = (expectedValue) => {

  const toBe = (actualValue) => {
    testedCondition = expectedValue == actualValue
    consoleDisplay.testWithExpectedCondition(testedCondition, currentTestDescription)
  }

  const toEqual = (actualValue) => {
    testedCondition = expectedValue === actualValue
    consoleDisplay.testWithExpectedCondition(testedCondition, currentTestDescription)
  }

  const toBeTrue = () => {
    testedCondition = expectedValue === true
    consoleDisplay.testWithExpectedCondition(testedCondition, currentTestDescription)
  }

  const toBeFalse = () => {
    testedCondition = expectedValue === false
    consoleDisplay.testWithExpectedCondition(testedCondition, currentTestDescription)
  }

  const toBeEmpty = () => {
    testedCondition = expectedValue.length === 0
    consoleDisplay.testWithExpectedCondition(testedCondition, currentTestDescription)
  }

  const toBeOfType = (type) => {
    testedCondition = typeof expectedValue === type
    consoleDisplay.testWithExpectedCondition(testedCondition, currentTestDescription)
  }

  return {
      toBe: toBe,
      toEqual: toEqual,
      toBeTrue: toBeTrue,
      toBeFalse: toBeFalse,
      toBeEmpty: toBeEmpty,
      toBeOfType: toBeOfType
  };

}

consoleDisplay.displayCompleteTestResults();
