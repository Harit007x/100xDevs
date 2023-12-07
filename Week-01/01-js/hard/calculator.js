/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs
  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(result=0){
    this.result = result;
    this.chunks = []
    this.temp = ''
    this.postFixStack = []
    this.opStack = []
    this.resultStack = []
    this.parenthesisStack = []; // create an empty stack
    this.openingChars = ['(', '{', '['];
    this.closingChars = [')', '}', ']'];
    this.openings = 0
    this.closings = 0
    this.operators = ['+', '-', '*', '/', '(', ')']
  }

  add(arg){
    this.result += arg
  }

  subtract(arg){
    this.result -= arg
  }

  multiply(arg){
    this.result *= arg
  }

  divide(arg){
    if(arg==0){
      throw new Error("Not divisible by 0")
    }
    this.result /= arg
  }

  clear(){
    this.result = 0
    this.chunks = []
    this.temp= ''
    this.postFixStack = []
    this.opStack = []
    this.resultStack = []
    this.openings = 0
    this.closings = 0
  }

  getResult(){
    return this.result
  }

  isValidParenthesis(inputString) {
    for (const c of inputString) {
        if (this.openingChars.includes(c)) {
            const correspondingClosingChar = this.closingChars[this.openingChars.indexOf(c)];
            this.parenthesisStack.push(correspondingClosingChar);
        } else if (this.closingChars.includes(c)) {
            if (this.parenthesisStack.length === 0 || this.parenthesisStack.pop() !== c) {
                return false;
            }
        }
    }

    return this.parenthesisStack.length === 0;
  }

  calculate(inputString){
    const precedence = {
      '(':3,
      '*':2,
      '/':2,
      '+':1,
      '-':1, 
    }
    if(!this.isValidParenthesis(inputString)){
      this.parenthesisStack = []
      throw new Error("Invalid Parenthesis")
    }

    else{
      
      // Purifying the inputString by remove spaces and performing formatting checks
      for(let i = 0; i<inputString.length; i++){
        if(inputString[i].toLowerCase() >= 'a' && inputString[i].toLowerCase() <= 'z'){
          throw new Error("Invalid Character");
        }

        if(this.operators.includes(inputString[i])){
          if(this.temp!=''){
            this.chunks.push(parseFloat(this.temp))
            this.temp = ''
          }
          this.chunks.push(inputString[i])
        }else{
          this.temp = this.temp + inputString[i]
        }
        if(inputString[i] == ' '){
          if(this.temp[0] != ' ' && this.temp!= ''){
            this.chunks.push(parseFloat(this.temp))
          }
          this.temp = ''
        }
        if(i == inputString.length-1){
          if(this.temp[0] != ' ' && this.temp!= ''){
            this.chunks.push(parseFloat(this.temp))
          }
        }
      }

    //creating a postfixStack
    for(let i=0; i<this.chunks.length; i++){
      if(typeof this.chunks[i]==='number'){
        this.postFixStack.push(this.chunks[i])
      }

      if(this.operators.includes(this.chunks[i]) && this.opStack[this.opStack.length - 1] === '('){
        this.opStack.push(this.chunks[i])
      }
      
      if(this.opStack.length == 0 && this.operators.includes(this.chunks[i])){
        this.opStack.push(this.chunks[i])
      }else if(this.operators.includes(this.chunks[i]) && precedence[this.chunks[i]] > precedence[this.opStack[this.opStack.length-1]]){
        this.opStack.push(this.chunks[i])
      }

      if(this.chunks[i] === ')'){
        while(true){
          const removedOperator = this.opStack.pop()
          if(removedOperator === '('){
            break
          }
          if(removedOperator != '(' && removedOperator != ')'){
            this.postFixStack.push(removedOperator)
          }

        }
      }

      if (this.operators.includes(this.chunks[i]) && precedence[this.chunks[i]] < precedence[this.opStack[this.opStack.length - 1]]) {
        while (
            this.opStack.length > 0 &&
            precedence[this.chunks[i]] < precedence[this.opStack[this.opStack.length - 1]]
        ) {
            const removedOperator = this.opStack.pop();
            this.postFixStack.push(removedOperator);
        }
        this.opStack.push(this.chunks[i]);
    }
    }

    // for transferring left out operators to postfixStack
    while(true){
      const removedOperator = this.opStack.pop()
      this.postFixStack.push(removedOperator)

      if(this.opStack.length==0){
        break
      }
    }

    // processing postfixStack to generate result
    while(this.postFixStack.length > 0){
      const removedNumber = this.postFixStack.shift()
      if(typeof removedNumber === 'number'){
        this.resultStack.push(removedNumber)
      }

      if(this.operators.includes(removedNumber)){
        const num1 = this.resultStack.pop()
        const num2 = this.resultStack.pop()
        let evaluation = 0
        switch(removedNumber){
          case '+':
            evaluation = num2+num1
            this.resultStack.push(evaluation)
            break
          case '-':
            evaluation = num2-num1
            this.resultStack.push(evaluation)
            break
          case '/':
            if(num1 == 0){
              throw new Error("Not divisible by 0")
            }
            evaluation = num2/num1
            this.resultStack.push(evaluation)
            break
          case '*':
            evaluation = num2*num1
            this.resultStack.push(evaluation)
            break
        }
      }
    }

    this.result = this.resultStack[0]
  
  }}
}

module.exports = Calculator;