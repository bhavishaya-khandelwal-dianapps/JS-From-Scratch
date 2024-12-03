//todo--- Currying :- 
//? Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

//* Instead of taking all arguments at once, the curried function takes the first argument, returns a new function that takes the next argument, and so on until all arguments are provided. The final function then returns the result.

//? In simpler terms, currying breaks down a function that takes multiple parameters into a chain of functions that each take one parameter.

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(2)(3)(4));




//* Method = 1 (Currying function)
function sendAutoEmail(to) {
    return function(subject) {
        return function(body) {
            console.log(`Sending E-mail to ${to} with subject - ${subject} : ${body} `);
        }
    }
} 


//* Method = 2 (Currying function)
const sendingAutoEmail = (to) => {
    return (subject) => {
        return (body) => {
            console.log(`Sending E-mail to ${to} with subject - ${subject} : ${body} `);
        }
    }
} 


//* Method = 3 (Currying function)
const sendingAutoGeneratedEmail = (to) => (subject) => (body) => console.log(`Sending E-mail to ${to} with subject - ${subject} : ${body} `);



let step1 = sendingAutoGeneratedEmail("bhavishayakhandelwal@gmail.com");
let step2 = step1("New order Confirmation");
let step3 = step2("Hey, Bhavishaya there is something for you");