const chalk = require('chalk');
const message = require('./Messages');
const ErrorHandler = require('./ErrorHandler')

class TestStatusDisplay{

  constructor(){
    this.passingTests = [];
    this.failingTests = [];
    this.fullTestList = [];
    this.errorHandler = new ErrorHandler();
  }

  testWithExpectedCondition(condition, currentTestDescription){
    if(condition){
      this.logTestResult(message.TEST_PASSED, currentTestDescription);
    }
    else{
      this.logTestResult(message.TEST_FAILED, currentTestDescription);
    }
  }

  logTestResult(testStatus, testDescription){
    var consoleText = `${testStatus}${testDescription}`
    this.placeTestInCorrectArray(testStatus, consoleText)
  };

  logTestErrors(actual, expected, expression){
    this.errorHandler.setActualValue(actual);
    this.errorHandler.setExpectedValue(expected);
    const message = this.errorHandler.setErrorMessage();
    this.errorHandler.pushErrorMessageToStack(message)
  }

  placeTestInCorrectArray(testStatus, shownConsoleMessage){
    if(testStatus == message.TEST_PASSED){
      this.passingTests.push(shownConsoleMessage);
    }
    else{
      this.failingTests.push(shownConsoleMessage);
    }
  }

  updateFullTestArray(){
    this.fullTestList = this.fullTestList.concat(this.passingTests, this.failingTests);
  }

  styleResultsDisplay(str){
    if(str.includes( message.TEST_PASSED)){ console.log(chalk.green(str)); }
    else{ console.log(chalk.red(str)); }
  }

  displayCompleteTestResults(){
    this.styleWithBorder();
    this.updateFullTestArray();
    this.fullTestList.map( status => this.styleResultsDisplay(status))
    this.styleWithBorder();
    this.fullTestList = []
  }

  styleWithBorder(){
    console.log(message.BLANK);
    console.log(message.DIVIDER)
  }

  displayCompleteErrors(){
      this.errorHandler.displayAllErrors();
  }

}

module.exports = TestStatusDisplay;
