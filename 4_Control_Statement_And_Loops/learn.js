//*==========================================
//* SWITCH STATEMENT 
//*==========================================
//? The switch staement is used to perform different actions based on different conditions.


// switch(expression) {
//     case value1 :
//         //* code 
//         break;
    
//     case value2 :
//         //* code 
//         break;

//     default :
//         //* code 
// }


let day = "Sunday";
switch(day) {
    case "Monday" :
        console.log("Today is Monday");
        break;
    
    case "Tuesday" :
        console.log("Today is Tuesday");
        break;
        
    case "Wednesday" :
        console.log("Today is Wednesday");
        break;

    case "Thursday" :
        console.log("Today is Thursday");
        break;

    case "Friday" :
        console.log("Today is Friday");
        break;

    case "Saturday" :
        console.log("Today is Saturday");
        break;

    case "Sunday" :
        console.log("Today is Sunday");
        break;
    
    default :
        console.log("Invalid Day");
}



//*==========================================
//* While Loop :-  
//*==========================================
let i = 1;
while(true) {
    if(i <= 5) {
        console.log(i);
    }
    else {
        break;
    }
    i++;
}



//*==========================================
//* Do While Loop :- 
//*==========================================
i = 1;
do {
    console.log(i);
    i++;
}while(i <= 5);



//*==========================================
//* For Loop :-  
//*==========================================
console.log('\n');
for(let j = 1 ; j <= 10 ; j++) {
    console.log(j);
}


//? Infinite For Loop 
// for( ; ; ) {}



//! Que : Given number is prime or not....??
let n = 13;
let isPrime = true;
for(let i = 2 ; i < n ; i++) {
    if(n % 2 == 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);


//! Que : Generate table of 5 
for(let i = 1 ; i <= 10 ; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}



//! Que : Check that the given year is leap year or not 
//? Logic : If a year is divisible by 4 and not divisible by 100, or If a year is divisible by 400, then it is a leap year 
let year = 2000;
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}


//! Que : Start Print Pattern
let star = ""; 
for(let i = 1 ; i <= 5 ; i++) {
    star += "* ";
    console.log(star);
}
