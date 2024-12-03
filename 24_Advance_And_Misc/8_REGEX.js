//* Regular Expression :-
//? regular expression are sequence of characters that define a search pattern. These patterns are widely used for string searching and manipulation. In Validation, regex helps ensure that strings such as email addresses and passwords conform to expected formats. 


//* Basic Syntax :- 
//? literals :- ordinary characters liek 'a', '1' or '%'
//? metacharacters :- characters with special meanings, like `.` (any character),   `^ (caret)` (start of string), `$` (end of string), etc. 
//* character classes  :- sets of characters, like `[a-z]` for any lowercase letter. 
//* character classes & shorthand :- In addition to specific characters sets, regex includes several shorthand character classes that help match common character types.



//? digit characters :- 
//*  `\d` : matches any digit (0 - 9) 
//*  `\D` : matches any non-digit 


//? whitespace characters :- 
//*  `\s` :- matches any whitespace character (including spaces, tabs, and line breaks)
//*   `\S` :- matches any non-whitespace characters. 



//? quantifiers :- specify how many times a characters can occur, like `+` (one or more) or  `*` (zero or more times) or `{1, 3}` (between one and three times) 




//? escape characters :- use a backslash(`\`) to escape special charscters and treat them like ordinary characters. 
//* Example :- 
//!  `\.` : matches a literal dot. 
//!  `\$` : matches a dollar sign `$`. 
//!  `\^` : matches a caret `^`.



//todo-----Practice <<->> Eamil Verification----------


const validateEmail = (email) => {
    return /^[A-Za-z\d]+(?:[.%+_][A-Za-z\d]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email);
}

console.log(validateEmail("bhavishayakhandlewal@gmai.com"));
console.log(validateEmail("bhavishaya.khandelwal@dianapps.com"));
console.log(validateEmail("bhavishaya..khandelwal@dianapps.com"));
console.log(validateEmail("bhavishaya.khandelwal@dianapps.com@"));
console.log(validateEmail("bh@avishaya.khandelwal@dianapps.com"));
console.log(validateEmail("bhavishaya.khandelwal@dianapps.co"));
console.log(validateEmail("bhavishaya.khandelwal@dianapps.c"));