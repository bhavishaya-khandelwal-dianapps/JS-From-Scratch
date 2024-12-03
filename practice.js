console.log(Number(undefined));   //* NaN
console.log(Number(null));        //* 0 
console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"


console.log("" + 1 + 0);   //* 10
console.log("" - 1 + 0);   //* -1
console.log(true + false);  //* 1 
console.log(6 / "3");       //* 2 
console.log("2" * "3");     //* 6
console.log(4 + 5 + "px");   //* 9px
console.log("$" + 4 + 5);    //* $45
console.log("4" - 2);        //* 2
console.log("4px" - 2);      //* NaN
console.log("  -9  " + 5);      //*   -9  5
console.log("  -9  " - 5);     //* -14 
console.log(null + 1);   //* 1 
console.log(undefined + 1);    //* NaN
console.log(" \t \n" - 2);   //* -2


console.log(null == undefined);   //* true 
console.log(null === undefined);  //* false


//* Parameter -> it's a declaration time term 
//* Argument -> it's a call time term


//* Function Declaration
function sum(a, b) {
    return a + b;
}


//* Function Expression
let add = function(a, b) {
    return a + b;
};



let user = new Object(); // "object constructor" syntax
let users = {};  // "object literal" syntax


let students = {
    s1 : "Bhavishaya", 
    s2 : "Karan Basandani", 
    s3 : "Tarush", 
    s4 : "Peeyush", 
    s5 : "Vansh", 
    s6 : "Manav",
};
for(let i in students) {
    console.log(`${i} - ${students[i]}`);
}


//todo --- NOTE :- One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// Two objects are equal only if they are the same object.

// For instance, here a and b reference the same object, thus they are equal:

let a = {};
let b = a; // copy the reference

console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true
// And here two independent objects are not equal, even though they look alike (both are empty):

let p = {};
let q = {}; // two independent objects

console.log( p == q ); // false




let myName = "FUTURE";
const myUsers = {
    name : "Bhavishaya Khandelwal", 
    greet : function() {
        console.log(`My name is ${this.name}`);
    },
    namaste : () => {
        console.log(`Namaste...${this.myName}`);
    }
};

myUsers.greet();   //* Bhavishaya
myUsers.namaste();   //* undefined 



