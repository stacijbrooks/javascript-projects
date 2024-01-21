const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strNew = str.slice(3) + str.slice(0,3)
console.log(strNew)

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original String is ${str}, Modified String is ${strNew}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strToModify = input.question("What is your string?");
let numOfLettersToSwap = Number(input.question("How many letters do you want to swap?"))
if (numOfLettersToSwap <= strToModify.length) {
    console.log("Accepted");
} else {
    console.log("Too long");
    let newWord = str.slice(strToModify) + str.slice(0, strToModify);
    console.log(newWord);
} 
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
/*if (numLetters <= str.length) {
    let newWord = str.slice(numLetters) + str.slice(0, numLetters);
    console.log()
} else console.log('too many letters, defaulted to 3')
    console.log(str.charAt.slice(3)) + 
    //not done. Confused by validation
    */