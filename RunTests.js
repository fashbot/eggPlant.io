const ResultHandler = require('./ResultHandler.js');
const resultHandler = new ResultHandler();
const otherHandler = require('./ResultHandler.js');

module.exports.run = () => {
  resultHandler.displayCompleteTestResults();
  resultHandler.displayCompleteErrors();
}
