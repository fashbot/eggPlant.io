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
    this.checkSingleTestStatus(testStatus, consoleText)
  };

  checkSingleTestStatus(testStatus, shownConsoleMessage){
    if(testStatus == message.TEST_PASSED){
      this.passedTestArray.push(shownConsoleMessage);
    }
    else{
      this.failedTestArray.push(shownConsoleMessage);
    }
  }

  updateTestResultList(){
    this.fullTestArray = this.fullTestArray.concat(this.passedTestArray, this.failedTestArray);
  }

  displayFinalTestResults(){
    this.updateTestResultList();
    this.fullTestArray.map( str => this.colorConsoleResultDisplay(str))
  }

  colorConsoleResultDisplay(str){
    if(str.includes( message.TEST_PASSED)){
      console.log(chalk.green(str));
    }
    else{
      console.log(chalk.red(str));
    }
  }
}

module.exports = ConsoleDisplay;
