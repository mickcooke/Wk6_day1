// console.log('sayHello message:', sayHello('Hail', 'Jen'))

// function sayHello(greeting, name = 'Randolph'){
//     return `${greeting} ${name}!`;
// }


// ANONYMOUS FUNCTION
var add = function (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

console.log('1+3 with add:', add(1,3));

// ANONYMOUS FUNCTION Version2
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log('multiply 2 by 5:', multiply(2,5));


