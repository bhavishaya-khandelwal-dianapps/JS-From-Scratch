// const obj = new Object({
//     name : "Bhavishaya", 
// });

// const obj2 = new obj();

// const obj3 = {
//     name : "BK",
// };



const obj = {
    name : "Bhavishaya Khandelwal", 
    getName : function() {
        return this.name;
    },
    getRoll : function() {
        return this.rollNo;
    },
};

// console.log(obj);

const obj2 = {
    rollNo : 19,
    name : "Tarush", 
    __proto__ : obj, 
};

// console.log(obj2.getName());   //* Tarush 
// console.log(obj2.getRoll());


const obj3 = {
    class : "MCA", 
    __proto__ : obj2, 
};

// console.log(obj3);
// console.log(obj3.getRoll());


const array = ["Ajay"];
console.log(array);


const object = new Object();
console.log(object);

const arr = new Array();
console.log(arr);



//* Creating our own prototype
Array.prototype.show=function() {
    return this;
}


const cities = ["Delhi"];
console.log(cities.show());


Array.prototype.convertIntoObject=function() {
    let newObj = {};
    this.forEach((currEle) => {
        newObj[currEle] = currEle;
    })
    return newObj;
}
let newObj = cities.convertIntoObject();
console.log(newObj);




//* We can create our own prototype  
function MyProtoType(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

MyProtoType.prototype = obj;

const myProto = new MyProtoType("Raksha", 69);
console.log(myProto);
console.log(myProto.getName());
console.log(myProto.getRoll());