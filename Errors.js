const chalk = require('chalk');
const message = require('./Messages');

class Errors{

  constructor(){
    this.errorStack = [];
    this.currentErrorMessage = null;
  }

  setErrorMessage(actualValue, expectedValue){
    this.currentErrorMessage =  message.errorMessage(actualValue, expectedValue)
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
