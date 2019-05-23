const message = require( './Messages');
let ConsoleDisplay = require('./ConsoleDisplay');

let currentTestDescription = null
let consoleDisplay = new ConsoleDisplay();
let expectedCondition = null

const testing = (testDescription, callback) => {
  callback();
}
const checks = (testDescription, callback) => {
  currentTestDescription = testDescription;
  callback();
}

const expect = (expectedValue) => {

  const toBe = (actualValue) => {
    expectedCondition = expectedValue == actualValue
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toStrictlyEqual = (actualValue) => {
    expectedCondition = expectedValue === actualValue
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toBeTrue = () => {
    expectedCondition = expectedValue === true
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toBeFalse = () => {
    expectedCondition = expectedValue === false
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toBeEmpty = () => {
    expectedCondition = expectedValue.length === 0
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toBeOfType = (type) => {
    expectedCondition = typeof expectedValue === type
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toBeGreaterThan = (value) => {
    expectedCondition = expectedValue > value
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toBeLessThan = (value) => {
    expectedCondition = expectedValue < value
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toHaveLengthOf = (value) => {
    expectedCondition = expectedValue.length === value
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toBeNull = () => {
    expectedCondition =  expectedValue === null
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  const toContain = (actualValue) => {
    expectedCondition =  expectedValue.includes(actualValue)
    consoleDisplay.testWithExpectedCondition(expectedCondition, currentTestDescription)
  }

  return {
      toBe: toBe,
      toStrictlyEqual: toStrictlyEqual,
      toBeTrue: toBeTrue,
      toBeFalse: toBeFalse,
      toBeEmpty: toBeEmpty,
      toBeOfType: toBeOfType,
      toBeGreaterThan: toBeGreaterThan,
      toBeLessThan: toBeLessThan,
      toHaveLengthOf: toHaveLengthOf,
      toBeNull: toBeNull,
      toContain: toContain
  };
}

consoleDisplay.displayCompleteTestResults();
