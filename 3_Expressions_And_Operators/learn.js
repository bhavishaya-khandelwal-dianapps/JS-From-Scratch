//*==========================================
//* EXPRESSIONS AND OPERATORS 
//*==========================================


//? Types of Operator :- 

//*==========================================
//* 1: ASSIGNMENT OPERATORS
//*==========================================
//? Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side. 

// var myFavNum = 15;
// console.log(myFavNum);



//*==========================================
//* ARITHMETIC OPERATORS 
//*==========================================
//? Arithmetic operators in programming performs basic mathematical operations on variables or values. They include addition, subtractio, multiplication, division, and modulus. 

// console.log(17 % 5); // Remainder 


//! What will be the Output....??
var result = "hello" / 2;
console.log(result);       //? NaN 


//*==========================================
//* INTERVIEW QUESTIONS 
//*==========================================
var r = 0.1 + 0.2;
console.log(r);     //? 0.30000000000000004
//? This problem occur due to binary conversion of floating point numbers
//* To solve this problem 
console.log(r.toFixed(2));

var re = 0.2 + 0.2;
console.log(re);    //? 0.4

var res = 55 * "hello";
console.log(res);     //? NaN



//*==========================================
//* STRING OPERATORS 
//*==========================================
//? There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code :

// console.log("Hello" + "World");


//*==========================================
//* Interview Questions :- 
//*==========================================
console.log("5" + 3);   //? 53 



//*==========================================
//* COMPARISON OPERATORS 
//*==========================================
//? Comparison operators in Javascript are used to compare values and return a Boolean result (true or false)

//* Equal (==) : Check if two values are equal, performing type coercion if necessary 
// console.log(5 == 5);

//* Strict Equal (===) : Check if two values are equal without performing type coercion.
console.log(5 === "5");  //? false 

//* Not Equal (!=) : Checks if two values are not equal, performing type coercion if necessary 
console.log(5 != "5");  //? false
console.log(5 !== "5");  //? true 

//* Greater Than (>) : Checks if the value on the left is greater than the value on the right side.
console.log(10 > 5);

//* Greater than equal to (>=) : 
console.log(5 >= 3);



//*==========================================
//* Interview Questions  
//*==========================================
//! What is the difference between == and === operators in JavaScript.....?? 
let num1 = 1;
let num2 = '1';
if(num1 == num2) {
    console.log("Equal");
}
else {
    console.log("Not Equal");
}

if(num1 === num2) {
    console.log("Equal");
}
else {
    console.log("Not Equal");
}







//*==========================================
//* LOGICAL OPERATORS 
//*==========================================
//? There are 3 main logical operators : && (logical AND), || (Logical OR), and ! (Logical NOT)
var x = 5, y= 10;
console.log(x > 0 && y < 11);

console.log(x > 5 || y < 15);

var isOpen = true;
console.log(!isOpen);  //? false





//*==========================================
//* Interview Questions  
//*==========================================
//? Combining logical operators allows you to create complex conditions: 



//! Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license ?
var age = 14;
var hadDrivingLicense = true;
if(age >= 18 && hadDrivingLicense) {
    console.log("You are allowed to drive");
}
else {
    console.log("Not allowed to drive");
}



//*==========================================
//* TERNARY OPERATOR 
//*==========================================
//? SYNTAX: condition ? expressionIfTrue : expressionIfFalse;
age >= 18 ? console.log("Eligible to Drive") : console.log("Not eligible to drive");

let percentage = 100;
let resultObtain = percentage >= 60 ? "Passed" : "Failed";
console.log(resultObtain);




//*==========================================
//* Interview Questions 
//*==========================================
console.log(typeof("5" - 3));   //? number 
console.log(2 < 12 < 5);        //? true
console.log("20" + 10 + 10);    //? 201010