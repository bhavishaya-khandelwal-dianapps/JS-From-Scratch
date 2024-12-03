//todo --- Closure :- 
//? A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 



//* Example - 1
function init() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    displayName();
}

init();





//* Example - 2
function outerFunction() {
    var outerVariable = "I'm from outer";   //* This variable is stored in heap memory.

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var closureFunction = outerFunction();
closureFunction();





//* Example - 3 
function main() {
    const name = "Bhavishaya Khandelwal";

    function sayMyName() {
        console.log(name);
    }

    return sayMyName;
}
let cloFn = main();

cloFn();





let myName = document.getElementById("myName");
let myBtn = document.getElementById("myBtn");

function makeTextSizer(size) {

    function changeSize() {
        myName.style.fontSize = `${size}px`;
    }

    return changeSize;
}



const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer(5);
const size70 = makeTextSizer(70);


myBtn.addEventListener('click', size70);











//? Example - 
function makeCounter() {
    let count = 1;

    function increment() {
        console.log(count++);
    }

    return increment;
}

const counter1 = makeCounter();

counter1();
counter1();
counter1();
counter1();