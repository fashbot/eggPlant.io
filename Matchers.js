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

  return {
      toBe: toBe,
  };

}

const logTestResult = (testStatus, testDescription) => {
  console.log(`${testStatus}${testDescription}`);
}

tests('checks if X is X', () => {
  expect("cheese").toBe("chdeese");
})

tests('checks if B is X', () => {
  expect("cheese").toBe("cheese");
})

consoleDisplay.displayFinalTestResults();
