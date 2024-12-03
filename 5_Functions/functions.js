//todo --- Function :- A function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, provide, promote code reuse, and make programs more readable.

//? Syntax : 
function functionName() {
    //* code to be executed
    let result = "RESULT";
    return result;
}



//*============================================
//* FUNCTION DECLARATION :- 
//*============================================
//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body 
//? This step defines the function and specifies what code should be executed when the function is called. 

// function greet() {
//     console.log("Hello guys, Welcome to my channel");
// }



//*===============================================
//* FUNCTION INVOCATION (Calling a Function) :- 
//*===============================================
//? After declaring a function, you can invoke or call it by using its name followed by parameters.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.


//* How to call a function....??
// greet();


console.log(sum(1,3));
function sum(a, b) {
    return a + b;
}




//*==========================================
//* FUNCTION EXPRESSIONS :- 
//*==========================================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.
let result = function getSum(a, b) {
    return a + b;
}

console.log(result(3, 4));






//*==========================================
//* ANONYMOUS FUNCTION :-  
//*==========================================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name. 

let output = function(a, b) {
    return a + b;
}
console.log(output(34, 54));






//*==========================================
//*  Return keyword:- 
//*==========================================
//? return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller.






//*===================================================
//* IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
//*===================================================
//? An IIFE, or Immediately Invoked Function Expression, is a javascript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately 
//* Syntax :- 
(function () {
    //Code goes from here
    console.log("IIFE");
})();


(function add(a, b) {
    console.log(a + b);
})(10, 320);
