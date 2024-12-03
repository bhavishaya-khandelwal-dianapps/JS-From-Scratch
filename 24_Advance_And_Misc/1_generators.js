//todo--- Iterators and Generators : Bring the concept of iteration directly into the core language and provide a mechanism for customizing the behaviour of (for......of) loop. 

//! Iterators :- In javascript an iterator is an object which defines a sequence and potentially a return value upon its termination. 
for(const value of [1, 2, 3, 4, 5]) {
    console.log(value);
}


function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextStart = start;
    let iterationCount = 0;

    return {
        next() {
            let result; 
            if(iterationCount < end) {
                result = { value : nextStart, done : false }
                nextStart = nextStart + step;
                iterationCount++;
            }
            return { value : iterationCount, done : true }
        }
    };
}

const myIterator = makeIterator(1, 10, 1);
let result = myIterator.next();
while(!result.done) {
    console.log(result.value);
    result = myIterator.next();
}











//! Generator Functions :- 
//? A generator function uses the yield keyword to generate values, pausing execution and sending values to the caller. It retains the state to resume execution after yield, continuing immediately after the last yield run.

function* count() {
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
    yield 14;
}
console.log(count());
const even = count();

for(const value of even) {
    console.log(value);
}


function* makeIteratorNew(start, end, stepSize) {
    for(let i = start ; i <= end ; i = i + stepSize) {
        yield i;
    }
}
console.log();
const one = makeIteratorNew(1, 20, 5);
// for(const value of one) {
//     console.log(value);
// }
console.log(one.next().value);
console.log(one.next().value);
console.log(one.next().value);
console.log(one.next().value);
console.log(one.next().value);