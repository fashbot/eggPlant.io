const chalk = require('chalk');
const message = require('./Messages');
const ErrorHandler = require('./ErrorHandler')
const TestStack = require('./TestStack.js')


let instance = null;
const errorStack = new ErrorHandler();
const testStack = new TestStack();

class ResultHandler{

  constructor(){
    if(!instance){
      instance = this;
    }

    this.testResultText = '';
    this.currentTestDescription = '';
    return instance;
  }


  evaluateTest(condition, currentTestDescription){
    this.currentTestDescription = currentTestDescription;
    return condition ? this.logResult(message.TEST_PASSED) : this.logResult(message.TEST_FAILED);
  }

  logResult(testStatus){
    this.testResultText = `${testStatus}${this.currentTestDescription}`
    this.sortTestByStatus(testStatus)
  };

  logTestErrors(actual, expected, expression){
    this.errorHandler.setActualValue(actual);
    this.errorHandler.setExpectedValue(expected);
    const message = this.errorHandler.setErrorMessage();
    this.errorHandler.pushErrorMessageToStack(message)
  }

  sortTestByStatus(testStatus){
    const isPassing = (testStatus == message.TEST_PASSED)
    const test = this.testResultText
    return isPassing ? testStack.addPassingTest(test) : test.addFailingTest(test)
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

module.exports = new ResultHandler();
