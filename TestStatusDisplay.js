const chalk = require('chalk');
const message = require('./Messages');

class TestStatusDisplay{

  constructor(){
    this.passingTests = [];
    this.failingTests = [];
    this.fullTestList = []
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
    this.updateFullTestArray();
    this.fullTestList.map( status => this.styleResultsDisplay(status))
  }
}

let c = new TestStatusDisplay();
c.testWithExpectedCondition(4==2, 'blah')

module.exports = TestStatusDisplay;
