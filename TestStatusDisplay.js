const chalk = require('chalk');
const message = require('./Messages');
const Errors = require('./Errors')

class TestStatusDisplay{

  constructor(){
    this.passingTests = [];
    this.failingTests = [];
    this.fullTestList = [];
    this.errors = new Errors();
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
    this.errors.setActualValue(actual);
    this.errors.setExpectedValue(expected);
    const message = this.errors.setErrorMessage();
    this.errors.pushErrorMessageToStack(message)
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
  }

  styleWithBorder(){
    console.log(message.BLANK);
    console.log(message.DIVIDER)
  }

  displayCompleteErrors(){
      this.errors.displayAllErrors();
  }

}

module.exports = TestStatusDisplay;
