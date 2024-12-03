//? Suppose you want to add two numbers and then you want to square the result.

function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val;
}

function multiply(a, b) {
    return a * b;
}

const addResult = add(2, 3);
console.log(square(addResult));


//? yeah, we can do this by combining these two functions 
function addTwoAndSquare(a, b) {
    return square(add(a, b));
}
console.log(addTwoAndSquare(2, 3));




//* What if you have hundrends of functions which you want to run in sequence. 
function composetwoFunctions(fn1, fn2) {
    return function(a, b) {
        return fn2(fn1(a, b));
    };
};

const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const task = c2f(multiply, square);
console.log(task(3, 3));








//* Now suppose we have hundreds of functions 
function compose(...fns) {
    return function(...values) {
        fns.reduceRight((a, b) => b(a), values);
    }
}