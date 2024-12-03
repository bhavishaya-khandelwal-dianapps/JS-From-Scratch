//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.
//* Callback hell, also referred to as the “pyramid of doom,” is a situation where multiple nested callbacks are used to handle asynchronous operations in JavaScript. This typically happens when you have several asynchronous tasks that depend on each other's results.



const getStudentData = () => {
    setTimeout(() => {
        console.log("Hii, My name is Bhavishaya");
        setTimeout(() => {
            console.log("Hii, My last name is Khandelwal");
            setTimeout(() => {
                console.log("I am a guitarist");
                setTimeout(() => {
                    console.log("I live in Jaipur");
                    setTimeout(() => {
                        console.log("I am currently pursuing my B.Tech in CSE from Govt. Engineering College, Ajmer");
                        setTimeout(() => {
                            console.log("I love to play badminton");
                            setTimeout(() => {
                                console.log("I am a software engineer trainee at DianApps");
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};


getStudentData();