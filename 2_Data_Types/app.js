//todo -- Data Types -> Defines the type of values that a variable can store. 
//? There are two types of data types
//* 1. Primitive Data Types :- 
    //? String
    //? Number 
    //? Boolean 
    //? Undefined 
    //? Null 
    //? BigInt 
    //? Symbol

//* 2. Object Data Types :- 
    //? An Object
    //? An Array 
    //? A Date



//* Number Data Type 
var myFavNum = 2;
console.log(typeof(myFavNum));



//* String Data Type 
var str = "Future";
console.log(typeof(str));



//* Boolean Data Type 
var isRaining = true;
console.log(typeof(isRaining));



//* Undefined Data Type -> Defines un-initialized value
var someVariable;
console.log("Some Variable = ", someVariable); //? undefined 
console.log(typeof(someVariable));  //? undefined 


//* Null Data Type - Represents absence of a value
var v = null;
console.log("Null Value = ", v);    //? null
console.log(typeof(v));   //? Object 




//* BigInt Data Type : Represents integers of arbitrary precision 
const bigNumber = 273547354352874527343254653247528734564287541572835472534853265423758473285423578453287n;
console.log(bigNumber);
console.log(typeof(bigNumber));




//! What is the difference between null and undefined...?? 
//? null : Imagine an Empty Box 
//* Explanation : Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.


//? undefined : Imagine a box that wasn't opened yet
//* Explanation : Now, if we talk about undefined, it's like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or loaded to see what's in it. 
//? Example : You have a gift box, and untill you open it, you don't know what's inside. Right now, it's undefined because you haven't checked or filled it with anything yet. 



//! What is the purpose of typeof operator in JavaScript....??
const myName = "The Acoutic Future";
console.log(myName);
console.log("Type of myName =", typeof(myName));   //? string
//? It defines the type of data 


console.log("\n");
console.log(typeof(null));



//! Convert a string to number......??
//? We just need to add the '+' sign before the string
//* Example - 1  
var num = "10";
console.log("Num =", num);
console.log("Type of Num =", typeof(num));
num = +num;
console.log('Updated Num =', num);
console.log("Updated Num Type =", typeof(num));

//* Example - 2
var nums = "32";
console.log("Nums =", nums);
console.log("Type of nums =", typeof(nums));
console.log("Type of updated nums =", Number(nums));
console.log("Nums = ", nums);
nums = Number(nums);
console.log("Nums =", nums);


//* Example - 3
let strs = 54;
console.log(strs);
console.log(typeof(strs));
strs = String(strs);
console.log(strs);
console.log(typeof(strs));

//? Conversion of number into string
let st = 8946358;
console.log(st);
st = st + "";
console.log(st);






//! Explain the concepts of truthy and falsy values in JavaScript......??
//? In JavaScript, values are either considered "truthy" or "falsy" when evaluated in a boolean context.

//* Truthy values are treated as true when used in conditions. Examples include :
    //? true 
    //? Any non-empty string ("hello")
    //? Any non-zero number (432)
    //? Arrays and objects, even if they're not empty 


//* Falsy values are treated as false when used in conditions. 
    //? false
    //? 0 (zero)
    //? '' (an empty string)
    //? null
    //? undefined 
    //? NaN (Not a Number)


var d = "kgn";
if(d) {
    console.log("True");  //? OutPut :- TRUE
}
else {
    console.log("FALSE");
}


var c = "";
if(c) console.log("True");
else console.log("False");  //? OutPut : False






//todo ----------Bonus-----------------
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases :- 
    //* parseInt :- parseInt is used to parse a string and convert it to an integer (whole number)
    const myString = "42";
    const myNumber = parseInt(myString);
    console.log(typeof(myNumber));


    const myStr = "324.32";
    const myNums = parseFloat(myStr);
    console.log(typeof(myNums));


//todo --------Question Practice--------------
console.log(parseInt("123"));
// 123 (default base-10)

console.log(parseInt("1321", 10));
// 123 (explicitly specify base-10)

console.log(parseInt("      123"));
// 123 (white spaces are ignored)


console.log(parseInt("1.9"));
// 1 (decimal part is truncated)




//! When we will not get an Output 
console.log(parseInt("&123"));   //? NaN
console.log(parseInt("-123"));   //? -123
console.log(parseInt("xyz"));    //? NaN
// NaN (input can't be converted to an integer)




//! What is the purpose of the NaN value in JavaScript.....??
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function 



console.log(isNaN("5"));   //? False
console.log(isNaN("bfdvub"));   //? True 



//! NaN === NaN, Why is it false.......??
if(NaN == NaN) {
    console.log("Both are equal");
}
else {
    console.log("Not Equal");
}
console.log(parseInt("fjgs"));   //? NaN
console.log(parseInt("foeibs")); //? NaN
//? Because origin is not same 





//! Concatenation in JavaScript 
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. 
//? When the + operator is used with strings, it concatenates the strings together. 
//? It's important to note that if any operand of the + operator is a string, JavsScript will treat the other operands as string as well, resulting in string concatenation. 
//? If both operands are numbers, the + operator performs numeric addition 


//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient. 
//? There are two types of coercion in JavaScript :
//? Implicit and Explicit.
//? Implicit coercion happens automatically, while explicit coercion is done manually by the programmer
//! It's worth nothing that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations


//todo--------Interview Questions---------
console.log(10 + "20");     //? 1020
console.log(9 - "5");       //? 4 
console.log("Java" + "Script"); //? JavaScript 
console.log("" + "");  //?            
console.log("" + 0);  //? 0
console.log("vinod" - "thapa");   //? NaN
console.log(true + true);   //? 2 
console.log(true + false);  //? 1 
console.log(false - true);  //? -1
const newString = "Hello" + "World";
console.log(newString);


