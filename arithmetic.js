/*Create a function that takes two numbers as input and performs basic arithmetic operations
such as addition, subtraction, multiplication, and division. Allow the user to choose the
operation they want to perform.*/

function arithmeticOpr(a,b){

    switch(operation){
      case `addition`:
        return a+b;
        //console.log(a+b)
        break;
      case `multipication`:
        return a*b;
        break;
      case `division`:
        return a/b;
        break;
      case `subtraction`:
        return a-b;
        break;
    }
    let x= arithmeticOpr(2,3,`addition`)
    console.log(x)
    
  }