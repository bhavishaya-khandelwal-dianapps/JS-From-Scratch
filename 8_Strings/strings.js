//*==========================================
//* STRINGS IN JAVASCRIPT :-  
//*==========================================
//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.


//* Note - 
//? Strings created with single or double quotes works the same. 
//? There is no difference between the two.



//* String Properties :- 
//? length : Property that returns the length of the string (number of characters)

const str = "Hello, World!!";
console.log(str.length);
// including spaces n all 




//*==========================================
//* Escape Characters :-  
//*==========================================
//? Escape Character : In Javascript, the backslash (\) is used as an escape character. It allows you to inlcude escape characters in a string. 

//*     Code        Result      Description 
//?     \'          '           Single Quote 
//?     \"          "           Double Quote 
//?     \\          \           Backslash

let text = "My name is \"Bhavishaya Khandelwal\"\nI am a Guitarist";
console.log(text);




//*==========================================
//* STRING SEARCH METHOD :-  
//*==========================================
//? 1. indexOf() :- The indexOf() method returns the index (position) of the first occurance of a character in a string, or it returns -1 if the string is not found.
//! Syntax : 
//* indexOf(searchString)
//* indexOf(searchString, position) 
//* This indexOf() method is case sensitive

let nameStr = "Bhavishaya Khandelwal";
console.log(nameStr.indexOf("Khandelwal"));

let nameArr = Array.from(nameStr);
console.log(nameArr);



//? 2. lastIndexOf() : The lastIndexOf() method returns the index of the last occurence of a specified text in a string. 
//! Syntax :- 
//* lastIndexOf(searchString);
//* lastIndexOf(searchString, position);


let s = "Hello JavaScript, welcome to our world best JavaScript course";
let index = s.lastIndexOf("JavaScript", 40);
console.log(index);




//? 3. search() : The search() method searches a string for a string (or a regular expression) and returns the position of the match. 
//* Returns the index number where the first match is found. Returns -1 if no match is found.
let result = s.search(/Javascript/i); //? If I add i flag then it will ignore case senitivity 
console.log(result);



//* Important Tips :- 
//? The search() method cannot take a second start position argument. 
//? The indexOf() method cannot take powerful search values (regular expression) 
//? They accept the same argument (parameters), and return the same value. 




//? 4. match() : Returns an array of the matched values or null if no match is found. 
const matchArr = s.match(/Javascript/gi);
// console.log(matchArr);
//todo --- Here the JS converts the normal text into regular expression text.match(/Javascript/); without the g flag 





//? 5. matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found. 
let matchAllRes = s.matchAll("JavaScript");
// console.log(...matchAllRes);
//todo --- Here the JS converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end
for(let item of matchAllRes) {
    console.log(item[0]);
    console.log(item.index);
    console.log(item.input);
    console.log(item.groups);
}





//? 6. includes() : Returns true if string contains the specified value, and false otherwise. 
console.log(s.includes("Java"));  //? true 
console.log(s.includes("Script")); //? true 
//* Regular expressions are not allowed 
//* includes() is case sensitive





//? 7. startsWith() : The startsWith() method returns true if a string begins with a specified value, otherwise it returns false
// let s = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(s.startsWith("Hello"));   //? true
console.log(s.startsWith("Worl"));    //? false
//* start position for the search can be specified 
console.log(s.startsWith("welcome", 18));
console.log(s.startsWith("welcome", 17));






//? 8. endsWith() : The endsWith() method returns true if a string ends with a specified value, otherwise it return false 
// let s = "Hello JavaScript, welcome to our world best JavaScript course";
console.log(s.endsWith("course"));









//*==========================================
//* EXTRACTING STRING PARTS :-  
//*==========================================
//? 1. slice() : It extracts a part of a string and returns the extracted part in a new string. 
//? slice() extracts up to but not including indexEnd.
//! Syntax :- 
//* slice(start, end);

// let s = "Hello JavaScript, welcome to our world best JavaScript course";

console.log(s.slice(4, 9));   //* gives string from s[4] to s[9 - 1]
console.log(s.slice(4));






//? 2. Substring : Extracts a portion of the string based on starting and ending indices. 
//* camelCase is used to seperate words, substring is not to be intended as Sub String but as substring 
//! Syntax :- 
//* substring(indexStart);  
//* substring(indexStart, indexEnd);
//? substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring(). 
console.log(s.slice(-4));
console.log(s.substring(-6));






//? 3. replace() : To replace any string with another string 
s = s.replace("JavaScript", "Java");
console.log(s);



//? 4. replaceAll() : To replace every string which match the given string 
s = s.replaceAll("JavaScript", "Java");
console.log(s);


//*==========================================
//* Extracting String Characters :-  
//*==========================================
//? There are 3 methods for extracting string characters : 
//* The charAt(position) Method 
//* The charCodeAt(position) Method
//* The at(position) Method 


//? 1. charAt() : The charAt() method returns the character at a specified index (position) in a string
console.log(s.charAt(12));




//? 2. charCodeAt() : The charCodeAt() method returns the code of the character ata a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(s.charCodeAt(0));





//? 3. at() : The at() method returns the character at a specified index(position) in a string. The at() method returns the same as charAt();
//todo --- ES2022 introduced the string method at()  
//* It allow -ve index while charAt() do not. 
console.log(s.at(0));
console.log(s.at(-2));






//*==========================================
//* OTHER USEFUL METHODS :-  
//*==========================================
//? 1. toUpperCaee() and toLowerCase() converts the string to uppercase or lowercase 
let myName = "Bhavishaya Khandelwal";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());


//? 2. trim() : Removes whitespaces from both ends of the string. 
const str2 = "     Hello, World!      ";
console.log(str2.length);
const strTrim = str2.trim();
console.log(strTrim.length);
console.log(strTrim);



//? 3. split() : Splits the string into an array of substrings based on a specified delimiter.
//* Converts string to array 
const str3 = "apple,orange,banana,grapes";
console.log(str3);
const str3Arr = str3.split(",").reverse().join();
console.log(str3Arr);


//? 4. join() : Converts array to string



//todo ---- To get character from it's ASCII value we have a special function 
//! Syntax :- 
//* String.fromCharCode('b')  === 98 
//? 5. String.fromCharCode('a')  === 97






//*==========================================
//* Interview Questions :-  
//*==========================================
//! Que_1 : Write a Javascript function that prints the letters 'a' to 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line. 
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
for(let i = 97 ; i <= 122 ; i++) {
    console.log(String.fromCharCode(i));
}


//! Que_2 : Write a function to count the number of vowels in a string ?
const countVowels = (str) => {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(let value of str) {
        if(vowels.includes(value)) {
            count++;
        }
    }
    return count;
}


//! Que_3 : Write a function to check if all the vowels presents in a string or not....?? 
const isVowelPresent = (str) => {
    const vowels = "aeiou";
    for(let value of vowels) {
        if(str.includes(value)) return true;
    }
    return false;
} 
console.log(isVowelPresent("bhja"));
console.log(countVowels("Bhavishaya Khandelwal"));


//! Que_4 : Write a JS function isPangram that takes a string as input and returns true if the string is a pangram (contains all letters of the alphabet) and false otherwise. The function should be case-insensitive and ignore spaces. 
//? Constrainsts :- 
//* The input string will contain of alphanumeric characters and spaces. 
//* The function should handle both uppercase and lowercase letters. 
//* Consider the English alphabet with 26 letters. 

//? Solution :- 
const isPangram = (str) => {
    if(str.length < 26) return false;
    const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    const capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let flag = true;
    for(let value of smallAlpha) {
        if(str.includes(value) === false) {
            flag = false;
            break;
        }
    }
    if(flag === true) return true;
    for(let value of capitalAlpha) {
        if(str.includes(value) === false) return false;
    }
    return true;
};
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));


const pangramChecker = (str) => {
    let inputArr = str.toLowerCase().split('');
    // console.log(inputArr);
    inputArr = [...new Set(inputArr)];
    // console.log(inputArr);
    // console.log(inputArr.length);
    if(inputArr.length !== 26) return false;
    return true;
}
console.log(pangramChecker("sjdvcjasbdkvlnasdklvbijsdbkjvsnabcdefghijklmnopqrstuvwxyz"));