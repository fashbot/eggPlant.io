const chalk = require('chalk');
const message = require('./Messages');

class Errors{

  constructor(){
    this.errorStack = [];
    this.currentErrorMessage = null;
    this.actualValue = null;
    this.expectedValue = null;
  }

  setActualValue(value){
    this.actualValue = value;
  };

  getActualValue(){
    return this.actualValue
  };

  setExpectedValue(value){
    this.expectedValue = value;
  };

  getExpectedValue(){
    return this.expectedValue
  }

  setErrorMessage(){
    this.currentErrorMessage =  message.errorMessage(this.getActualValue(),this.getExpectedValue())
    return this.formatErrorMessage()
  }

  formatErrorMessage(){
    let traceStack = null;
    try{ throw new Error(chalk.red(this.currentErrorMessage)) } catch(e){ traceStack = e.stack }
    return `${traceStack}`
  }

  pushErrorMessageToStack(message){
    this.errorStack.push(`${message} \n`);
  }

  displayAllErrors(){
    this.errorStack.map( error =>  console.log(error) )
  }
}


module.exports = Errors
