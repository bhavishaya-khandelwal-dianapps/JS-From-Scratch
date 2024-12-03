//*==========================================
//* Math Object in JavaScript :-  
//*==========================================
//? Math : The Math namespace object constains static properties and methods for mathematical constants and functions. 
//? Math works with the Number type. It doesn't work with BigInt 




//? 1. Math.round() :- Rounds to the nearest integer.

//? 2. Math.floor() :- Always rounds down to the nearest integer. 

//? 3. Math.ceil() :- Always rounds up to the nearest integer. 

console.log(Math.ceil(0.3));    //? 1
console.log(Math.floor(0.8));   //? 0
console.log(Math.round(0.5));   //? 1
console.log(Math.ceil(4.0));    //? 4
console.log(Math.floor(4.0));   //? 4 
console.log(Math.round(4.0));   //? 4 


//? 3. Constants :- 
//* Math.PI : Represents the mathematical Pi (π).
const pi = Math.PI;
console.log(pi.toFixed(2));




//? 4. Math.abs() : The Math.abs() static method returns the absolute value of a number.]
//* or simply, how the far the number if from 0. It will always be positive  
console.log(Math.abs(-34));  //* 34 



//? 5. Math.trunc(x) : Returns the integer part of x.
console.log(Math.trunc(341.34));  //? 341 






//*==========================================
//* EXPONENTIAL AND LOGARITHMIC FUNCTIONS :-  
//*==========================================
//? Math.pow(x, y) : Return the value of x to the power of y.


//? Math.sqrt(x) : math.sqrt(x) return the square root of x.

//? Math.log(x) : return the logarithm of x. 
console.log(Math.log(2));
console.log(Math.pow(2, 3));
console.log(2 ** 3);   // 2^3 = 8
console.log(Math.sqrt(26).toFixed(4));


//? Math.log2(x) : returns the base 2 logarithm of x.
console.log(Math.log2(4));



//? Math.random() : Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random());

console.log(Math.floor(Math.random() * 20) + 1); //* generate numbers from [1, 20]