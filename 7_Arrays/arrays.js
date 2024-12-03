const persons = ["Ram", "Sita", "Laksham", "Luv", "Kush"];
console.log(persons);
console.log(persons.at(-1));  //? Kush 
console.log(persons.at(-2));  //? Luv
console.log(persons.at(-3));  //? Laksham




//*==========================================
//* ARRAYS IN JAVASCRIPT :- 
//*==========================================
//? Iterable - Objects where you can use the for-of-loop

//? Array-like object - Any object with length property and use indexes to access items 

//? Arrays as Objects : Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array. 

//? typeof Operator : The typeof operator in JavaScript returns "object" for both arrays and regular objects.



console.log(typeof(persons));  //? object 


//* JavaScript Array is a data structure that allow you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including number, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element accessed with an index 0, the second element with an index 1, and so forth.


//*==========================================
//* CREATING ARRAYS :- 
//*==========================================
//? Using literals (square brackets [])
let arr = [];
console.log(typeof(arr));

//? Using Array constructor :- 
// let fruits = new Array("apple", "banana", "grapes");
// console.log(fruits);

//? Using array literals 
let fruits = ["apple", "banana", "orange", "grapes"];
console.log(fruits);


//? We can also create an empty array 
let mtArray = [];
console.log(mtArray);





//*==========================================
//* ACCESSING ELEMENTS :- 
//*==========================================
//? Accessing elements : Array elements are accessed using zero-based indices. 





//*==========================================
//* Modifying Elements :-  
//*==========================================
//? Modifying elements :- You can modify array elements by assigning new values to specific indices. 




//*=============================================
//* ARRAY TRAVERSAL / ITERATING OVER ARRAYS :- 
//*=============================================

//? 1: for of loop, also known as iterable 
//* for....of Loop : The for....of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.
for(let value of fruits) {
    console.log(value);
}


//? 2: for in loop 
//* for......in Loop : The for.....in loop is used to iterate over the properties (including indices) of an object. 
for(let i in fruits) {
    console.log(fruits[i]);
}


//? 3: forEach Method 
//* The arr.forEach() method calls the provided function once for each of the element of the array. The provided function may perform any kind of operation on the elements of given array.
//! Syntax :- 
// array.forEach(function callback(currentValue, index, array) {
//     //? Your logic goes from here
// }, thisValue);

//* array : The array on which the forEach method is called.
//* callback : A function that will be called once for each element in the array 
//* currentValue : The current element being processed in the array. 
//* index(optional) : The index of the current element being processed. 
//* array (optional) : The array forEach was called upon.
//* thisValue (optional) : A value to use as this when executing the callback function.


//? forEach() method using FAT ARROW FUNCTION :- 
// array.forEach((currentValue, index, array) => {
//     //* your code goes from here
// }, thisValue);


console.log("\n");
persons.forEach((currEle, index, persons) => {
    console.log(currEle);
});





//? 4. map() Method :- 
//* map() creates a new array from calling a function for every array element
//* .map() not change the original array.
//* Ye method aapko ekdm naya array bana krr deta hai, bina original array ko change karein  
//! Syntax :- 
// array.map(function callback(currentValue, index, array) {
//     //* Your logic goes from here
// }, thisValue);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let updatedNums = nums.map((currEle, index, nums) => {
    return currEle * currEle;
});
console.log(updatedNums);
console.log(nums);


//* So if you want to perform some operations on given array then use forEach() method, but if you want to create a new array with transformed elements then always use map() method;

//* Key Differences :- 
//! Return Value :- 
//? forEach : It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//? map : It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining :- 
//? forEach : It doesn't return a value, so it cannot be directly chained with array methods. 

//? map : Since it returns a new array, you can chain other array methods after using map. 


//! Use Case :- 
//? forEach :- Used when you want to iterate over the elements and perform an action on each element, but you don't need a new array. 

//? map :- Used when you want to create a new array based on the transformation of each element in the original array.







//*===========================================================================
//* How to Insert, Add, Replace and Delete Elements in Array (CRUD) - p1
//*===========================================================================
//? 1. push() : Method that adds one or more elements to the end of an array. 
//? 2. pop() : Method that removes the last element from an array. 
//? 3. unshift() : Method that adds one or more element to the beginning of an array 
//? 4. shift() : Method that removes the first element from an array. 

let v = [2, 3, 4, 5];
v.push(6);
console.log(v);
v.pop();
v.pop();
console.log(v);
v.unshift(1);
console.log(v);
v.shift();
v.shift();
console.log(v);







//*=================================================================
//* What if, we want to add or remove anywhere in an array - p2
//*=================================================================
//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
//! Syntax :- 
//? splice(start, deleteCount, item1, item2, /* ........ */ itemN);
console.log(fruits);
fruits.splice(1, 1, "APPLE");
console.log(fruits);







//*==========================================
//* SEARCHING IN AN ARRAY :- 
//*==========================================
//? For Search we have -> indexOf, lastIndexOf & includes 
let n = [1, 3, 3, 4, 5, 4, 5, 4, 4, 5, 4, 3];

//? 1. indexOf Method : The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//! Syntax :- 
//* indexOf(searchElement);
//* indexOf(searchelement, fromIndex);
console.log(n.indexOf(5));
console.log(n.indexOf(5, 7));



//? 2. Includes Method : The includes method checks whether an array includes a certain element, returning true or false.
//! Syntax : includes(searchElement, fromIndex);
console.log(n.includes(4));
console.log(n.includes(2));



//? 3. lastIndexOf Method : The lastIndexOf method of Array instances returns the last index at which a given element can be found in the array or -1 of it is not present.
//! Syntax :- 
//* lastIndexOf(searchElement, fromIndex) 
console.log(n);
console.log(n.lastIndexOf(3, 6));






//todo --- Challenge Time :- 
//? 1. Add "Dec" at the end of an array. 
//? 2. What is the return value of splice method ?
//? 3. Update march to March (update). 
//? 4. Delete June from an Array.  

const months = ["Jan", "march", "April", "June"];

//* 1. 
months.splice(months.length, 0, "Dec");
console.log(months);

//* 2. 
// It will return an empty array ([]) 

//* 3. 
let indexOfMarch  = months.indexOf("march");
months[indexOfMarch] = "March";
console.log(months);

//* 4.
let indexOfJune = months.indexOf("June");
months.splice(indexOfJune, 1);
console.log(months);








//*==========================================
//* FILTERS IN AN ARRAY :-  
//*==========================================
//? Search + Filter 
const num = [1, 2, 3, 4, 5, 7, 4, 7, 7, 8, 9, 6, 10];


//? 1. find Method : The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found. 
const result = num.find((currEle, index, num) => {
    return currEle > 5;
});
console.log(result);   //* 6 (Because this is the first element which is greater than 5)



//? 2. findIndex Method : The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 
console.log("\n");
console.log(num);
const result2 = num.findIndex((currEle, index, num) => {
    return currEle > 5;
});
console.log(result2);  //* 5 (because the first element which is greater than 5 is at index number 5) 



//? 3. Filter Method :- The filter method creates a new array with all elements that pass the test implemented by the provided function. 
//! Syntax :- same as maps
const result3 = num.filter((currEle, index, num) => {
    return currEle <= 5;
})
console.log("\n");
console.log(result3);
console.log(num);



//! Use case :- In E-commerce website when we want to Remove or Delete any product from addToCart page. 
//? Let say user want to delete value 7 from num array 
//* const num = [1, 2, 3, 4, 5, 7, 4, 7, 7, 8, 9, 6, 10];

const updatedNum = num.filter((currEle) => {
    return currEle !== 7;
})
console.log(updatedNum);








//*==========================================
//* Interview Questions :-  
//*==========================================
//! Que : Given an array of products where each product has a name and a price, write a function that uses the filter method to return an array containing only the products with a price less than or equal to 5000. 

const products = [
    {
        name : "Laptop",
        price : 1200
    },
    {
        name : "Phone", 
        price : 500
    },
    {
        name : "Tablet", 
        price : 300
    },
    {
        name : "Smartwatch",
        price : 150
    },
];


console.log("\n");
console.log(products);
const updatedProduct = products.filter((currEle) => {
    return currEle.price <= 500;
})
console.log(updatedProduct);








//! Filter out unique values from num 
// const num = [1, 2, 3, 4, 5, 7, 4, 7, 7, 8, 9, 6, 10];
const uniqueEle = num.filter((currEle, index, arr) => {
    return arr.indexOf(currEle) === index;
})
console.log(num);
console.log(uniqueEle);

console.log([...new Set(num)]);








//*==========================================
//* How to Sort and Compare an Array :-   
//*==========================================
//? Sorting an Array :- The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

console.log(fruits);
fruits.sort();
console.log(fruits);


//? Compare callback function 
const unsortedArr = [34, 45,5,5 ,64 ,4 ,34, 3,54, 3, 34,5 ,35, 43];
console.log(unsortedArr);

const sortedArr = unsortedArr.sort((a, b) => a - b);
console.log(sortedArr);
//? if(a > b) return 1 => switch the order 
//? if(b > a) return -1 =? keep the order 


//* Sort in ascending order :- 
const sortArrAsc = unsortedArr.sort((a, b) => {
    if(a > b) return 1;
    if(b > a) return -1;
})
console.log(sortArrAsc);


//* Sort in descending order :- 
const sortArrDes = unsortedArr.sort((a, b) => {
    if(a > b) return -1;
    if(b > a) return 1;
})
console.log(sortArrDes);







//*==========================================
//*  Very Important Array Methods :- 
//*==========================================
//? Map(), Filter(), Reduce(), 

//? Map() Method :- 
//* map() creates a new array from calling a function for every array element. 
//* map() does not execute the function for empty elements 
//* map() does not change the original array



const originalArray = [1, 2, 3, 4, 5];
//! Que_1 : Using map() find the square of each number in the original array 
//? Solution_1 ===============================
const sqArr = originalArray.map((currEle) => {
    return currEle * currEle;
})
console.log(sqArr);


//! Que_2 : Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
//? Solution_2=================================
const capitalizedArr = fruits.map((currEle) => {
    return currEle.toUpperCase();
})
console.log(capitalizedArr);


//! Que_3 : Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number. 
//? Solution_3 ================================
const sqEvenNum = originalArray.map((currEle) => {
    if(currEle % 2 === 0) {
        return currEle * currEle;
    }
}).filter((currEle) => {
    return currEle !== undefined;
});
console.log(sqEvenNum);


//! Que_4 : Using the map method, write a function that takes an array of names and return a new array where each name is preficed with "Mr. ".
//? Solution_4=================================
const nameArr = ["Bhavishaya Khandelwal", "Ayush Kumar Singhal", "Ketan Jain", "Vaibhav Jain"];
const updatedNameArr = nameArr.map((currEle) => {
    return `Mr. ${currEle}`;
})
console.log(updatedNameArr);





//* Reduce() method :- 
//? The reduce() method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument. 
//! Syntax :-
const array = [];
let initialValue = 0; 
array.reduce(function callback(accumulator, currentValue, index, array) {
    //* Your code goes from here 
    //* Return the updated acuumulator value
}, initialValue);

//? callback : A function that is called once for each element in the array.
//* accumulator : The accumulator result of the previous iterations. 
//? currentValue : The current element being processed in the array. 
//* index (optional) : The index of the current element being processed. 
//? array (optional) : The array reduce was called upon. 
//* initialValue (optional) : An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value. 






//*==========================================
//* Interview Questions :-  
//*==========================================
//! Que_1 : Write a JS function that calculates the total price of items in a shopping cart. The function should take an array of item prices as input and return the total price. 
const price = [12, 34, 3, 543, 65, 6767, 87];
const totalPrice = price.reduce((accumulator, currEle) => {
    return  accumulator + currEle;
}, 0);
console.log(totalPrice);