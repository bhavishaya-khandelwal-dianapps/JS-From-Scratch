//? JavaScript is a single threaded, but call stack, web apis, callback queue these are the things which gives power to javascript 


function firstFunction() {
    console.log("First Function completed");
    secondFunction();
};


function secondFunction() {
    console.log("Second function is completed");
    setTimeout(() => {
        console.log("fun2 is starting");
    }, 2000);
    thirdFunction();
};


function thirdFunction() {
    console.log("Third Function");
}


firstFunction();