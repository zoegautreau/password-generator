// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  prompt("How many characters would you like your password to have? ");

prompt("Would you like lowercase letters in your password? Select 'OK' for YES and 'Cancel' for NO")

prompt("Would you like uppercase letters in your password? Select 'OK' for YES and 'Cancel' for NO")

prompt("Would you like special characters in your password? Select 'OK' for YES and 'Cancel' for NO")

prompt("Would you like numbers in your password? Select 'OK' for YES and 'Cancel' for NO")

}
