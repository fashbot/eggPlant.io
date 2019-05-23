const chalk = require('chalk');
const message = require('./Messages');

class ConsoleDisplay{

  constructor(){
    this.passedTestArray = [];
    this.failedTestArray = [];
    this.fullTestArray = []
    this.errorArray = [];
  }

  logTestResult(testStatus, testDescription){
    var consoleText = `${testStatus}${testDescription}`
    this.placeTestInCorrectArray(testStatus, consoleText)
  };

  testWithExpectedCondition(condition, currentTestDescription){
    if(condition){
      this.logTestResult(message.TEST_PASSED, currentTestDescription);
    }
    else{
      this.logTestResult(message.TEST_FAILED, currentTestDescription);
    }
  }

  placeTestInCorrectArray(testStatus, shownConsoleMessage){
    if(testStatus == message.TEST_PASSED){
      this.passedTestArray.push(shownConsoleMessage);
    }
    else{
      this.failedTestArray.push(shownConsoleMessage);
    }
  }

  updateFullTestArray(){
    this.fullTestArray = this.fullTestArray.concat(this.passedTestArray, this.failedTestArray);
  }

  displayCompleteTestResults(){
    this.updateFullTestArray();
    this.fullTestArray.map( str => this.styleResultsDisplay(str))
  }

  styleResultsDisplay(str){
    if(str.includes( message.TEST_PASSED)){ console.log(chalk.green(str)); }
    else{ console.log(chalk.red(str)); }
  }
}

module.exports = ConsoleDisplay;
