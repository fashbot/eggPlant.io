const chalk = require('chalk');
const message = require( './Messages');

class ConsoleLogger{

  showText(text){
    console.log(text);
  }

  showBlank(){
    console.log(message.BLANK);
  }

  showTextInYellow(text){
    console.log(chalk.yellow(text));
  }

  showTextInRed(text){
    console.log(chalk.red(text));
  }

  showTextInGreen(text){
    console.log(chalk.green(text));
  }

  showDivider(){
    console.log(message.DIVIDER)
  }

  styleWithBorder(){
    console.log(message.BLANK);
    console.log(message.DIVIDER)
  }

  styleResultsDisplay(str){
    str.forEach( item => {
      if(item.includes( message.TEST_PASSED)){
        this.showTextInGreen(item);
      }
      else{
        this.showTextInRed(item);
      }
    })
  }

}
module.exports = ConsoleLogger;
