const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('EggPlant', {horizontalLayout: 'default' }),
  )
);

let space = "                  ";
console.log(chalk.yellow(`${space}The World's best testing framework`));
