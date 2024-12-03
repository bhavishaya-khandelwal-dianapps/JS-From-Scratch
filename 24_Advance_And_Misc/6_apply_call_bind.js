//todo---- Call :- 

//? Problem Statement :- 


let userDetails = {
    name : "Bhavishaya Khandelwal", 
    age : 22, 
    designation : "Software Engineer Trainee",
    // printDetails : function() {
    //     console.log(this.name);
    // } 
};

let printDetails = function(state, country) {
    console.log(this.name + " " + state + " " + country);

}

// userDetails.printDetails();




let userDetails2 = {
    name : "Tarush Jhalani", 
    age : 23, 
    designation : "Software Engineer Trainee",
};


//* Function Borrowing :- 
// userDetails.printDetails.call(userDetails2);


//* Call :- 
printDetails.call(userDetails2, "Delhi", "India");


//* Apply :- 
printDetails.apply(userDetails, ["Delhi", "India"]);


//* Bind :- 
let newFun = printDetails.bind(userDetails, "Delhi", "India");
newFun();