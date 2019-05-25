const chalk = require('chalk');
const message = require( './Messages');
const TestStatusDisplay = require('./TestStatusDisplay');
const Errors = require('./Errors')

let currentTestDesc = null
let testStatusDisplay = new TestStatusDisplay();
let error = new Errors();
let expectedCondition = null

const testing = (testDescription, callback) => {
  console.log(message.BLANK)
  const testDescDisplay = `${message.TEST_SUITE}${testDescription}`
  console.log(chalk.yellow(testDescDisplay))
  callback();
  displayMatchers();
}


const checks = (testDescription, callback) => {
  currentTestDesc = testDescription;
  callback();
}

const displayResults = (actualValue, expectedValue) => {
  testStatusDisplay.testWithExpectedCondition(expectedCondition, currentTestDesc)
  return !expectedCondition ? testStatusDisplay.logTestErrors(expectedValue, actualValue) : null;
}

const expect = (expectedValue) => {

  const toBe = (actualValue) => {
    expectedCondition = (expectedValue == actualValue)
    displayResults(actualValue, expectedValue);
  }

  const toStrictlyEqual = (actualValue) => {
    expectedCondition = (expectedValue === actualValue)
    displayResults(actualValue, expectedValue);
  }

  const toBeTrue = () => {
    expectedCondition = (expectedValue === true)
    displayResults(!expectedCondition, expectedCondition);
  }

  const toBeFalse = () => {
    expectedCondition = (expectedValue === false)
    displayResults(!expectedCondition, expectedCondition);
  }

  const toBeEmpty = () => {
    expectedCondition = (expectedValue.length === 0)
    displayResults(!expectedCondition, expectedCondition);
  }

  const toBeOfType = (type) => {
    expectedCondition = (typeof expectedValue === type)
    displayResults(type, expectedValue);
  }

  const toBeGreaterThan = (actualValue) => {
    expectedCondition = (expectedValue > value)
    displayResults(!expectedCondition, expectedCondition);
  }

  const toBeLessThan = (actualValue) => {
    expectedCondition = (expectedValue < value)
    displayResults(actualValue, expectedValue);
  }

  const toHaveLengthOf = (actualValue) => {
    expectedCondition = (expectedValue.length === value)
    displayResults(actualValue, expectedValue);
  }

  const toBeNull = () => {
    expectedCondition =  (expectedValue === null)
    displayResults(null, expectedValue);
  }

  const toContain = (actualValue) => {
    expectedCondition =  expectedValue.includes(actualValue)
    displayResults(!expectedCondition, expectedCondition);
  }

  const toBeGreaterThanOrEqualsTo = (actualValue) => {
    expectedCondition = (expectedValue > actualValue || expectedValue == actualValue)
    displayResults(!expectedCondition, expectedCondition);
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
      toContain: toContain,
      toBeGreaterThanOrEqualsTo: toBeGreaterThanOrEqualsTo
  };
}

const displayMatchers = () => {
  testStatusDisplay.displayCompleteTestResults();
  testStatusDisplay.displayCompleteErrors();
}

module.exports = {
  testing,
  checks,
  expect,
  displayMatchers
}
