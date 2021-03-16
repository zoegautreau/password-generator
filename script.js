// Assignment Code
var generateBtn = document.querySelector("#generate");

var amountPrompt = prompt("How many characters would you like your password to have? *Must be more than 8, and less than 128*");

var lowercaseConfirm = confirm("Would you like lowercase letters in your password? Select 'OK' for YES and 'Cancel' for NO");

var uppercaseConfirm = confirm("Would you like uppercase letters in your password? Select 'OK' for YES and 'Cancel' for NO");

var specialConfirm = confirm("Would you like special characters in your password? Select 'OK' for YES and 'Cancel' for NO");

var numbersConfirm = confirm("Would you like numbers in your password? Select 'OK' for YES and 'Cancel' for NO");

// Prompt for amount of characters (number value input)
function checkAmount() {
  amountPrompt;
}

// Lowercase confirmation (true or false input - OK or Cancel)
function checkLowercase() {
  lowercaseConfirm;
}

// Uppercase confirmation (true or false - OK or Cancel)
function checkUppercase() {
  uppercaseConfirm;
}

// Special characters confirmation (true or false - OK or Cancel)
function checkSpecial() {
  specialConfirm;
}

// Numbers confirmation (true or false - OK or Cancel)
function checkNumbers() {
  numbersConfirm;
}

// Checks if user wants lowercase letters (true or false input - OK or Cancel)
if (checkLowercase) {

  else {

  }
}

// Checks if user inputs a number lower than 8 or higher than 128
if (checkAmount < 8 || checkAmount > 128){
  alert("Length must be 8-128 characters")
}


if (checkAmount >= 8 && checkAmount <= 128){
  var uppercaseConfirm = confirm("Would you like to use uppercase letters?")
  var lowercaseConfirm = confirm("Would you like to use lowercase letters?")
  var numbersConfirm = confirm("would you like to use numbers?")
  var specialConfirm = confirm("would you like to use special characters?")
  }    
  
  if (uppercaseConfirm != true && lowercaseConfirm != true && numbersConfirm != true && specialConfirm != true){
      alert("You must select at least one character type!")
  }

// Checks if user wants uppercase letters (true or false input - OK or Cancel)
if (checkUppercase) {

  else {

  }
}

// Checks if user wants special characters (true or false input - OK or Cancel)
if (checkSpecial) {

  else {

  }
}

// Checks if user wants numbers (true or false input - OK or Cancel)
if (checkNumbers) {

  else {

  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
// Click button

var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var uppercaseOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseOnly = "abcdefghijklmnopqrstuvwxyz";
var numbersOnly = "0123456789";
var specialOnly = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperLowerNumbers = "ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var upperLowerSpecial = "ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperNumbersSpecial = "ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lowerNumbersSpecial = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var upperLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var upperNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var upperSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lowerNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
var lowerSpecial = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbersSpecial = "0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

