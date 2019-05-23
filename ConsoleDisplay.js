const message = require('./Messages');

class ConsoleDisplay{

  constructor(){
    this.passedTestArray = [];
    this.failedTestArray = [];
    this.fullTestArray = []
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
    this.fullTestArray.map( x => console.log(x))
  }
}

module.exports = ConsoleDisplay;
