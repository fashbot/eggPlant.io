const message = require( './Messages');
const TestStatusDisplay = require('./TestStatusDisplay');
const Errors = require('./Errors')

let currentTestDesc = null
let testStatusDisplay = new TestStatusDisplay();
let error = new Errors();
let expectedCondition = null

const testing = (testDescription, callback) => {
  callback();
}
const checks = (testDescription, callback) => {
  currentTestDesc = testDescription;
  callback();
}

const expect = (expectedValue) => {

  const toBe = (actualValue) => {
    expectedCondition = expectedValue == actualValue
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
    errors.setErrorMessage(expectedValue, actualValue);
  }

  const toStrictlyEqual = (actualValue) => {
    expectedCondition = expectedValue === actualValue
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toBeTrue = () => {
    expectedCondition = expectedValue === true
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toBeFalse = () => {
    expectedCondition = expectedValue === false
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toBeEmpty = () => {
    expectedCondition = expectedValue.length === 0
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toBeOfType = (type) => {
    expectedCondition = typeof expectedValue === type
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toBeGreaterThan = (value) => {
    expectedCondition = expectedValue > value
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toBeLessThan = (value) => {
    expectedCondition = expectedValue < value
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toHaveLengthOf = (value) => {
    expectedCondition = expectedValue.length === value
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toBeNull = () => {
    expectedCondition =  expectedValue === null
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  }

  const toContain = (actualValue) => {
    expectedCondition =  expectedValue.includes(actualValue)
    testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
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

testing('x', () => {
  checks('if', () => {
    expect(1).toBeTrue();
  })
})

testStatusDisplay.displayCompleteTestResults();
