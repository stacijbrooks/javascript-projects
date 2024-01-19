const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
strNew = str.slice(3) + str.slice(0,3)
console.log(strNew)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original String is ${str}, Modified String is ${strNew}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strModified = input.question("What is the number of letters you want to relocate?");
if (strModified <= str.length) {
    console.log("Accepted");
} else if (strModified > str.length) {
    console.log("Too long");
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numLetters <= str.length) {
    let newWord = str.slice(numLetters) + str.slice(0, numLetters);
    console.log()
} else console.log('too many letters, defaulted to 3')
    console.log(str.charAt.slice(3)) + 