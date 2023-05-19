
 
 //first method
let firstNumber = 17 ;
let secondNumber = 19 ;
let placeholder;

placeholder = firstNumber ;
firstNumber= secondNumber ;
secondNumber = placeholder ;
console.log(firstNumber)
 console.log(placeholder)

//second method
let numb1 = 1;
let numb2 = 2;

[numb1, numb2] = [numb2, numb1];

numb1; // => 2
numb2; // => 1
console.log(numb1,numb2)

//third method
let variable1 =15;
let variable2 =29;
let temporaryVariable = variable1;
variable1 = variable2;
variable2 = temporaryVariable;
console.log(variable1)
 console.log(variable2)
