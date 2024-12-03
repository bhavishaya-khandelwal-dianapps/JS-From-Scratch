console.log(isNaN("34"));  //? false
console.log(isNaN(43876587)); //? false
console.log(isNaN("djbsdjf"));  //? true 
console.log(isNaN("-2334"));  //? false 
console.log(isNaN(-34956));  //? false 



if(NaN === NaN) {
    console.log(true);
}
else {
    console.log(false);
}
//* Output -> false (because it may be possible ki origin different ho)


console.log(9 - "5");
console.log("9" - 5);
console.log("9" - "5");
console.log("5" - "9");
console.log(typeof("9" - 4));
console.log(typeof("4" - 5));
console.log(typeof(""));
console.log(typeof(typeof(true)));