//todo --- Prototypes in JS :- 
//? A JavaScript object is an entity having state and behaviour (properties and method) 
//? JS objects have a special property called prototype. 
//? We can set prototype using          __proto__
//* Basically we can say that there's an object inside the object


//* Method 1 of creating objects
const student = {
    fullName : "Bhavishaya Khandelwal",
    marks : 94.4, 
    printMarks : function() {
        console.log("Marks =", this.marks);
    }
};

student.printMarks();


const employee = {
    calTax() {
        console.log("Tax rate is 10%");
    }
};
employee.calTax();

const karanArjun = {
    salary : 50000, 
    __proto__ : employee, 
    calTax() {
        console.log("Tax rate is 20%");
    }
};

//todo ----NOTE : If object and prototype have same method, object's method will be used. 
karanArjun.calTax();











//todo ---- Classes In JS :- 
//? Class is a program-code template for creating objects. 
//? Those objects will have some state (variable) and some behaviour (functions) inside it. 
//* Classes basically ek object ko banaane kaa ek template deti hai, ek blueprint hota hai


// class MyClass {
//     constructor() {.....}
//     myMthods() {......}
// };


class ToyotaCar {

    constructor(brand, mileage) {
        console.log('Hii, I am constructor');
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("Start the car");
    }

    stop() {
        console.log("Stop the car");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
};

let fortuner = new ToyotaCar("FORTUNER", 10);
let lexus = new ToyotaCar("LEXUS", 12);
fortuner.start();
lexus.stop();
// fortuner.setBrand();
console.log(fortuner.brand);
console.log(fortuner.mileage);
console.log(lexus.brand);
console.log(lexus.mileage);











//todo---- Constructor in JS :- 
//? constructor() method is  
    //* automatically incoked ny new 
    //* initialzes object

class Stuent {
    constructor() {
        console.log("Creating new objects");
    }
};

let s1 = new Stuent();















//todo---- Inheritance in JS :- 
//? Inheritance is passing down properties and methods from parent class to child class. 


class Parent {
    hello() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {}

//todo--- NOTE : If child and parent have same method, child's method will be used. [Method Overriding]

let c1 = new Child();
c1.hello();


class Person {

    constructor() {
        console.log("Enter Parent Constructor");
        this.species = "Homo Sapiens";
    }

    eat() {
        console.log("Eat");
    }
};

class Engineer extends Person {

    constructor(branch) {
        console.log("Enter Child Constructor");
        super();  //* to invoke parent class constructor
        this.branch = branch;
        console.log("Exit Child Constructor");
    }

    work() {
        console.log("Solve problems, build something");
    }
};

class Doctor extends Person {
    work() {
        console.log("Treat Patients");
    }
};

let bhavishaya = new Engineer("Computer Science and Engineering");
console.log(bhavishaya.branch);












//todo--- super keyword :- 
//? The super keyword is used to call the constructor of its parent class to access the parent's properties and methods. 

class Human {
    constructor(name) {
        this.name = name;
    }
};

class Stud extends Human {
    constructor(name) {
        super(name);
    }
};

let Stud2 = new Stud("Peeyush Gupta");
console.log(Stud2.name);










//*==================================================
//* Practice Questions  
//*==================================================
//! You are creating a website for your college. Create a class User with 2 properties, name and email. It also has a method called viewData() that allows user to view website data.

let data = "Secret Data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }


    viewData() {
        console.log("Data =", data);
    }
};

let user1 = new User("Tarush", "abc@gmail.com");
user1.viewData();





class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "Updated Data";
    }
};
let admin1 = new Admin("Admin", "Admin@gmail.com");
admin1.viewData();
admin1.editData();
admin1.viewData();