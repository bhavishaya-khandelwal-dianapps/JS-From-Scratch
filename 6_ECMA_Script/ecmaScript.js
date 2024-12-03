//*==========================================
//* LET AND CONST - EcmaScript 2015
//*==========================================
//? ley keyword :- The let keyword is used to declare variable with block scope. Variables declared with let are mutable, meaning their values can be re-assigned. 

//? const keyword :- The const keyword is used to declare variables with block scope, but once a value is assigned to a const variable, it cannot be reassigned, const variables are immutable.
const myName = "The Acoustic Future";
let myAge = 22;


//! Difference between let and var........??
if(true) {
    var name = "Bhavishaya Khandelwal";
    console.log(name);  //? Bhavishaya Khandelwal
}
console.log(name);   //? Bhavishaya Khandelwal


if(true) {
    let age = 20;
    console.log(age); //? 20 
}
// console.log(age);  //? age is not defined (error)




//*============================================
//* TEMPLATE STRINGS - EcmaScript 2015
//*============================================
//? In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks(``) rather than single or double quote. 

let firstName = "The Acoustic";
let lastName = "Future";
let fullName = firstName + lastName;
console.log(fullName);
console.log(`${firstName} ${lastName}`);




//*==========================================
//* STRING INTERPOLATION :- 
//*==========================================
//? String Interpolation : Template strings supports interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}
console.log(`I am ${myAge} year old`);


let multiLineString = `
    This is a multiline 
    string using template literals. 
    It's much cleaner and easier to read.
`;
console.log(multiLineString);






//*==========================================
//* DEFAULT PARAMETERS 
//*==========================================
//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameter allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used;

//? Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed. 

//! Write a function to find sum of two numnbers. What if during function call user only passed one argument.....??
function sum(a, b = 10) {
    return a + b;
}

console.log(sum(3));  //? 13
console.log(sum(5, 15));  //? 20






//*==========================================
//* FAT ARROW FUNCTION :- 
//*==========================================
//? In ECMAScript 6 (ES6), arrow functions, alos known as fat arrow functions, were introduced as a concise way to write anonymous functions. 


const add2Num = (a, b) => {
    return a + b;
}
console.log(add2Num(3, 4));




//todo --- NOTES :- 
//? 1. If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
const fun = () => console.log("Play with me");


//? 2. If there is only one parameter, the parentheses () around the parameter list can be omitted. 
const square = a => console.log(a * a);
square(4);


//? 3. If there are no parameters, use an empty set of parentheses ()
const greet = () => console.log("Namaste Everyone");
greet();






//! Question : 1 Calculator Function 
const calculator = (a, b, c) => {
    if(c === '+') {
        return a + b;
    }
    else if(c === '-') {
        return a - b;
    }
    else if(c === '/') {
        return a / b;
    }
    else if(c === '*') {
        return a * b;
    }
    else {
        return a % b;
    }
}

console.log(calculator(5, 5, '%'));




//! Write a function to reverse a string....??
const reverseString = (str) => {
    let s = "";
    for(let i = str.length - 1 ; i >= 0 ; i--) {
        s += str[i];
    }
    return s;
}
console.log(reverseString("CAR"));




//! Create a function that determines if a given string is a palindrome (reads the same backward as forward)
let givenString = "racecar";
if(givenString === reverseString(givenString)) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}

