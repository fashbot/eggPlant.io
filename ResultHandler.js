const chalk = require('chalk');
const message = require('./Messages');
const ErrorHandler = require('./ErrorHandler')
const TestStack = require('./TestStack.js')
const ConsoleLogger = require('./ConsoleLogger.js')

let instance = null;
let testResultText = '';
let currentTestDescription = '';
let consoleLogger = new ConsoleLogger();
const errorStack = new ErrorHandler();
const testStack = new TestStack();

class ResultHandler{

  constructor(){
      this.stack = [];
      this.errorMessage = '';
  }

  evaluateTest(condition, testDesc){
    currentTestDescription = testDesc;
    return condition ? this.logResult(message.TEST_PASSED) : this.logResult(message.TEST_FAILED);
  }

  getStack(){
    return this.stack;
  }

  setStack(value){
    this.stack = value;
  }

  logResult(testStatus){
    testResultText = `${testStatus}${currentTestDescription}`
    this.sortTestByStatus(testStatus)
  };

  logTestErrors(actual, expected, expression){
    errorStack.setActualValue(actual);
    errorStack.setExpectedValue(expected);
    this.errorMessage = errorStack.setErrorMessage();
    errorStack.pushErrorMessageToStack(this.errorMessage)
  }

  sortTestByStatus(testStatus){
    const isPassing = (testStatus == message.TEST_PASSED);
    return isPassing ? testStack.addPassingTest(testResultText) : testStack.addFailingTest(testResultText)
  }

  displayCompleteTestResults(){

    this.styleWithBorder();
    testStack.updateFullTestStack();
    this.setStack(testStack.getTechStack());
    consoleLogger.styleResultsDisplay(this.getStack());
    this.styleWithBorder();
  }

  styleWithBorder(){
    consoleLogger.showBlank();
    consoleLogger.showDivider();
  }

  displayCompleteErrors(){
      errorStack.displayAllErrors();
  }

}

module.exports =  ResultHandler;
