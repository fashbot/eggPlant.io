const chalk = require('chalk');
const message = require('./Messages');

class Errors{

  constructor(){
    this.errorStack = [];
  }

  setErrorMessage(actualValue, expectedValue){
    return message.errorMessage(actualValue, expectedValue)
  }
  
}


module.exports = Errors
