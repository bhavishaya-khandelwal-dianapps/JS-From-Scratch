//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)




//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element from the last to first of the array based on a condition.
const arr = [1, 2, 3, 4, 5, 6, 4];
// console.log(arr.findLast((currEle) => {
//     currEle > 4;
// }));
// console.log(arr.findLastIndex((curr) => {
//     curr;
// }));






//* ===============================================
//*  New Array.prototype functions
//* ==============================================

const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];

//? Array.prototype.toReversed();
const mN = myNames.toReversed();
console.log(mN);

//? Array.prototype.toSorted(compareFn);
const sa = myNames.toSorted();
console.log(sa);

//? Array.prototype.toSpliced(start, deleteCount, ...items);
const ua = myNames.toSpliced(1, 2, "Bhavishaya");
console.log(ua);


//? Array.prototype.with(index, value);
//* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.
const ua1 = myNames.with(2, "BHAVISHAYA");
console.log(ua1);