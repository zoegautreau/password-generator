// Assignment Code
var generateBtn = document.querySelector("#generate");

var amountPrompt = prompt("How many characters would you like your password to have? *Must be more than 8, and less than 128*");

var lowercaseConfirm = confirm("Would you like lowercase letters in your password? Select 'OK' for YES and 'Cancel' for NO");

var uppercaseConfirm = confirm("Would you like uppercase letters in your password? Select 'OK' for YES and 'Cancel' for NO");

var specialConfirm = confirm("Would you like special characters in your password? Select 'OK' for YES and 'Cancel' for NO");

var numbersConfirm = confirm("Would you like numbers in your password? Select 'OK' for YES and 'Cancel' for NO");

function checkAmount() {
  amountPrompt;
}

function checkLowercase() {
  lowercaseConfirm;
}

function checkUppercase() {
  uppercaseConfirm;
}

function checkSpecial() {
  specialConfirm;
}

function checkNumbers() {
  numbersConfirm;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
