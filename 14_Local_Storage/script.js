//todo --- LocalStorage :- Allow you to save key/value pairs in the browser.
//? The localStorgae object stores data with no expiration date. 
//? The data is not deleted when the browser is closed and are available for further sessions. 




//! How to add the data to the localStorage
// localStorage.setItem("jsCourseTest", "addingData");


//! How to get data from localStorage 
// localStorage.getItem("jsCourseTest");
//* If you didn't get anything then you get NULL


//! How to remove the data from localStorage 
// localStorage.removeItem("jsCourseTest");



//todo --- Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringify;
//* JSON.stringify : Converts a JavaScript object into a JSON string. 
//? Useful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format. 
// const data = {
//     name : "Bhavishaya Khandelwal",
//     age : 22, 
//     city : "Jaipur",
//     college : "Govt. Engineering College, Ajmer",
// };
// const jsonString = JSON.stringify(data);
// console.log(jsonString);  
//* Output : {"name":"Bhavishaya Khandelwal","age":22,"city":"Jaipur","college":"Govt. Engineering College, Ajmer"}





//* JSON.parse : Converts a JSON string into a JavaScript Object.
//? Useful when you receive JSON data from a server or read it from a file, and you want to work with it as a JavaScript object.

// const parsedData = JSON.parse(jsonString);
// console.log(parsedData);



//* Example - 2 : 
// const arr = ["Bhavishaya", "Ayush", "Ketan", "Vaibhav"];
// const jsonData = JSON.stringify(arr);
// console.log(jsonData);
// const parse = JSON.parse(jsonData);
// console.log(parse);



const studentBioData = {
    firstname : "Bhavishaya", 
    lastName : "Khandelwal", 
    age : 22, 
    gender : "Male", 
    grade : "A", 
    courses : ["Math", "Sciece", "English"], 
    address : {
        street : "Gali No 2",
        city : "Ajmer", 
        state : "Rajasthan", 
        pinCode : 305025,  
    }, 
};



const addToDoList = () => {
    localStorage.setItem("objectData", JSON.stringify(studentBioData));
}

addToDoList();


const getToDoList = () => {
    let data = localStorage.getItem("objectData");
    console.log(data);
    data = JSON.parse(data);
    console.log(data);
}

getToDoList();


const removeToDoList = () => {
    localStorage.removeItem("objectData");
}

removeToDoList();