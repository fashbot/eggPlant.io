class TestStack{

  constructor(){
    this.testStack = []
  }

  addToTestStack(test){
    this.testStack.push(test);
  }

  showTestStack(){
    this.testStack.map( test => console.log(test))
  }

}
