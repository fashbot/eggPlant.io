const message = require( './Messages');
let ConsoleDisplay = require('./ConsoleDisplay');

let currentTestDescription = null
let consoleDisplay = new ConsoleDisplay();

const describe = (testDescription, callback) => {
  callback();
}
const tests = (testDescription, callback) => {
  currentTestDescription = testDescription;
  callback();
}

const expect = (expectedValue) => {

  const toBe = (actualValue) => {
    if(expectedValue == actualValue){
      consoleDisplay.logTestResult(message.TEST_PASSED, currentTestDescription);
    }
    else{
      consoleDisplay.logTestResult(message.TEST_FAILED, currentTestDescription);
    }
  }

  const toEqual = (actualValue) => {
    if(expectedValue === actualValue){
      consoleDisplay.logTestResult(message.TEST_PASSED, currentTestDescription);
    }
    else{
      consoleDisplay.logTestResult(message.TEST_FAILED, currentTestDescription);
    }
  }


  return {
      toBe: toBe,
      toEqual: toEqual
  };

}
consoleDisplay.displayFinalTestResults();
