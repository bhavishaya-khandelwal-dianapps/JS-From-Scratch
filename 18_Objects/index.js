//* ==============================
//* Object in JavaScript
//* ==============================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

const product = {
    id : 1, 
    prodName : "Laptop",   
};
console.log(product);

let person = {
    name : "Bhavishaya Khandelwal",
    age : 22, 
    "is'Student" : true, 
    greet : function() {
        console.log("Welcome to World Best JS Course");
        console.log(this.age);
    },
    // fun : () => {
    //     console.log(this.name);
    // }
};
console.log(person);
person.greet();
console.log(person["is'Student"]);
//todo ---- Most imprtant note :- In JavaScript, arrow functions don't have their own "this" keyword because they inherit it from the parent scope. This is called "lexical scoping". 



  
//* ==============================
//* Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:

console.log(person.age);
console.log(person.name);
console.log(person[`name`]);
console.log(person[`is'Student`]);
  




//* =================================
//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:
person.job = "Software Engineer Trainee";
person.name = "The Acoustic Future";
console.log(person);
console.log(person["age"]);  //* 22 







//* ========================================
//* Methods:
//* ========================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:
person.greet();









//* ========================================
//* We can add dynamic keys in an object
//* ========================================

let idType = "studentId";

let student = {
  [idType]: "A123456", // Dynamic key based on idType
  sName: "Bhavishaya",
  sAge: 22,
  isStudent: true,
  greet: function () {
    console.log(
      `Hey, my ${idType} is ${this[idType]} and my name is ${student.sName}.`
    );
  },
};

student.greet();

//? useCase: when we want to get the user name and value in react








//* =================================
//* Data Modeling:
//* =================================
//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function () {
    console.log("Engine started!");
  },
};








//* =====================================
//*  Interview Question
//* ======================================

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//* Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.
let a = 10;
const modifyValue = (x) => {
    x = 20;
}
console.log(modifyValue(a));
console.log(`a = ${a}`);

//* Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.
//todo --- Pass By Reference === Original 
let obj = {
    id : 5, 
    name : "Future",
};
let obj1 = obj;
console.log(obj1);
obj1.name = "Bhavishaya Khandelwal";
console.log(obj);
console.log(obj1);
console.log("Original" + obj);  //* [Object Object]



//* To avoid this behaviour and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...)

//? Object.assign() is used to copy properties from one or more source objects to a target object.
let newObj = Object.assign({}, obj);
console.log(newObj);
newObj.name = "FUTURE";
console.log(obj);
console.log(newObj);









//* =====================================
//* Comparison by Reference:
//* ======================================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

const obj3 = { name : "Bhavishaya" };
const obj4 = { name : "Bhavishaya" };
const obj5 = obj3;   //* It means obj5 ne same memory address liya hai 

if(obj3 === obj4) {
    console.log(true);
}
else {
    console.log(false);
}


if(obj3 === obj5) {
    console.log(true);
}
else {
    console.log(false);
}










//* ==========================================
//* JSON (JavaScript Object Notation):
//* ==========================================

//?JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.

let students = {
  id: 1,
  sName: "Vinod",
  sAge: 29,
  isStudent: false,
  greet: function () {
    console.log(
      `hey my id is ${students.identity} & my name is ${students.sName}`
    );
  },
};

let jsonData = JSON.stringify(students);
console.log(jsonData);
let parsedObject = JSON.parse(jsonData);
console.log(parsedObject);










//* ==============================================
//* "this" Object
//* ==============================================

//? In JavaScript, the this keyword refers to an object.
//* Which object depends on how this is being invoked (used or called).

//todo-- The this keyword refers to different objects depending on how it is used:

//* In an object method, this refers to the object.
//* Alone, this refers to the global object.
//* In a function, this refers to the global object(means window object)
//* In a function, in strict mode, this is undefined.
//* In an event, this refers to the element that received the event.
//* Methods like call(), apply(), and bind() can refer this to any object

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.
// ("use strict");

// x = 5;
// console.log(x);

// function callme() {
//   console.log(this);
// }

// callme(); // try to run on browser console

//todo  Let's check the this keyword values in an object methods

//* Regular Function Expression:
const obj6 = {
  name: "Kodyfier",
  greet: function () {
    console.log(this.name);
  },
};

obj6.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
const obj7 = {
  name: "Kodyfier",
  greet() {
    console.log(this.name);
  },
};

obj7.greet();

//* Fat Arrow Function
const obj8 = {
  name: "thapa technical",
  greet: () => {
    console.log(this.name);
  },
};
 
obj8.greet();   //* undefined (in case of fat arrow function)








//* =====================================
//* Objects Useful Methods
//* ======================================

const products = {
  id: 1,
  name: "Laptop",
  category: "Computers",
  brand: "ExampleBrand",
  price: 999.99,
  stock: 50,
  description:
    "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
  image: "image link will be added during projects",
};

//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.
let keys = Object.keys(products);
console.log(keys);



//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.
let values = Object.values(products);
console.log(values);



//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
let entries = Object.entries(products);
console.log(entries);



//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
console.log(products.hasOwnProperty("name"));  //* true 
console.log(products.hasOwnProperty("id"));   //* true 
console.log(products.hasOwnProperty("prices"));   //* false 




//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = { a : 1, b : 2 };
const source = { b : 3, c : 2 };
const mergeObject = Object.assign(target, source);
console.log(mergeObject);
//* Basically target kaa jo key hai woh agar source mein milta hai toh source waala usko overwrite krr deta hai 
//* Output : { a: 1, b: 3, c: 2 }




//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
// Object.freeze(products);

// products.id = 3443;
// console.log(products);







//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?
const targets = { a : 1, b : 2 };
const sources = { b : 3, c : 2 };
const mergeObjects = Object.assign(targets, sources);
console.log(mergeObjects);
//* Output :- { a : 1, b : 3, c : 2 }




//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================
//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

let Student = {
    name : "Bhavishaya Khandelwal", 
    age : 18, 
    grades : {
        math : 90,
        science : 85, 
        history : 88
    },
};
if(Student.hasOwnProperty("grades")) {
    console.log(true);
}
else {
    console.log(false);
}

const addSubjectGrade = (subject, marks) => {
    Student.grades[subject] = marks;
}

addSubjectGrade("Computer", 92);
console.log(Student.grades);




//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// // Example usage:
let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

const areObjectsEqual = (objA, objB) => {
    let key1 = Object.keys(objA);
    let key2 = Object.keys(objB);
    if(key1.length !== key2.length) return false;
    for(let value of key1) {
        if(key2.includes(value) === false) return false;
    }
    let val1 = Object.values(objA);
    let val2 = Object.values(objB);
    if(val1.length !== val2.length) return false;
    for(let value of val1)  {
        if(val2.includes(value) === false) return false;
    }
    return true;
}

console.log(areObjectsEqual(objA, objB)); // Should return true
console.log(areObjectsEqual(objA, objC)); // Should return false






//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

let inputArray = [
    { id : 1, name : "Alice" },
    { id : 2, name : "Bob" }, 
    { id : 3, name : "Charlie" },
];

const arrayToObj = (arr) => {
    let newObj = {};
    for(let i in arr) {
        newObj[parseInt(i) + 1] = arr[i];
    }
    return newObj;
}

let objOfObj = arrayToObj(inputArray);
console.log(objOfObj);