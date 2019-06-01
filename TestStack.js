let instance = null;

class TestStack{

  constructor() {

     if(!instance){
       instance = this;
     }
     this.testStack = [];
     this.passingTestStack = [];
     this.failingTestStack = [];

   return instance;
 }

  addToTestStack(test){
    this.testStack.push(test);
  }

  addPassingTest(test){
    this.passingTestStack.push(test);
  }

  addFailingTest(test){
    this.failingTestStack.push(test);
  }

  showTestStack(){
    this.testStack.map( test => console.log(test))
  }

  updateFullTestStack(){
    this.testStack = [];
    this.testStack = this.testStack.concat(this.passingTestStack, this.failingTestStack);
  }

  getTechStack(){
    return this.testStack;
  }





}
module.exports = TestStack
