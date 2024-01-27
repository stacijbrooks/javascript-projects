const input = require('readline-sync');
function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWithA = function(input)  {
  return input.toLowerCase().startsWith("a");
};
// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function(input) {
  return ['a', 'e', 'i', 'o','u'].includes(input.toLowerCase());
}
let isValidPasword = function(password){
  if (password.length >= 8 && isVowel(password[0])) {
    return true;
  }
  else return false;
}
// Be sure to test your code!
console.log(getValidInput('Create a password:', isValidPasword));