// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
//}

//random variables
var randAllCharacters = " ";
var randUpperOnly = " ";
var randLowerOnly = " ";
var randNumbersOnly = " ";
var randSpecialOnly = " ";
var randUpperLowerNumbers = " ";
var randUpperLowerSpecial = " ";
var randUpperNumbersSpecial = " ";
var randLowerNumbersSpecial = " ";
var randUpperLower = " ";
var randUpperNumbers = " ";
var randUpperSpecial = " ";
var randLowerNumbers = " ";
var randLowerSpecial = " ";
var randNumbersSpecial = " ";
var checkUppercase = " ";
var checkLowercase = " ";
var checkNumbers = " ";
var checkSpecial = " ";

// Prompt and confirm function to check length of string and desired character types
function checkAmountConfirm() {
  var string_length = prompt("How many characters would you like your password to have? *Must be more than 8, and less than 128*");
  if (string_length >= 8 && string_length <= 128) {
    checkUppercase = confirm("Would you like lowercase letters in your password? Select 'OK' for YES and 'Cancel' for NO");
    checkLowercase = confirm("Would you like uppercase letters in your password? Select 'OK' for YES and 'Cancel' for NO");
    checkNumbers = confirm("Would you like special characters in your password? Select 'OK' for YES and 'Cancel' for NO");
    checkSpecial = confirm("Would you like numbers in your password? Select 'OK' for YES and 'Cancel' for NO");
  } else {
      alert("Length must be 8-128 characters.");
      checkAmountConfirm();
  }
  createPassword(string_length);
}

// ALL PASSWORD POSSIBILITIES

// All characters option 4/4
function allCharactersString(string_length) {
  randAllCharacters;
  var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length; i++){
    randAllCharacters += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }
  return randAllCharacters
}

// Upper + Lower + Number characters option 3/4
function upperLowerNumbersString(string_length) {
  randUpperLowerNumbers;
  var upperLowerNumbers = "ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i, i = 0; i < string_length; i++){
    randUpperLowerNumbers += upperLowerNumbers.charAt(Math.floor(Math.random() * upperLowerNumbers.length));
  }
  return randUpperLowerNumbers
}

// Upper + Lower + Special characters option 3/4 
function upperLowerSpecialString(string_length) {
  randUpperLowerSpecial;
  var upperLowerSpecial = "ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length; i++){
    randUpperLowerSpecial += upperLowerSpecial.charAt(Math.floor(Math.random() * upperLowerSpecial.length));
  }
  return randUpperLowerSpecial
}

// Upper + Numbers + Special characters option 3/4 
function upperNumbersSpecialString(string_length) {
  randUpperNumbersSpecial;
  var upperNumbersSpecial = "ABCDEFGHHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length.length; i++){
    randUpperNumbersSpecial += upperNumbersSpecial.charAt(Math.floor(Math.random() * upperNumbersSpecial.length));
  }
  return randUpperNumbersSpecial
}

// Lower + Number + Special characters option 3/4 
function lowerNumbersSpecialString(string_length) {
  randLowerNumbersSpecial;
  var lowerNumbersSpecial = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length; i++){
    randLowerNumbersSpecial += lowerNumbersSpecial.charAt(Math.floor(Math.random() * lowerNumbersSpecial.length));
  }
  return randLowerNumbersSpecial
}

// Upper + Lower characters option 2/4 
function upperLowerString(string_length) {
  var randUpperLower = " ";
  var upperLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for(var i, i = 0; i < string_length; i++){
    randUpperLower += upperLower.charAt(Math.floor(Math.random() * upperLower.length));
  }
  return randUpperLower
}

// Upper + Number characters option 2/4 
function upperNumbersString(string_length) {
  randUpperNumbers;
  var upperNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for(var i, i = 0; i < string_length; i++){
    randUpperNumbers += upperNumbers.charAt(Math.floor(Math.random() * upperNumbers.length));
  }
  return randUpperNumbers
}

// Upper + Special characters option 2/4 
function upperSpecialString(string_length) {
  randUpperSpecial;
  var upperSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length; i++){
    randUpperSpecial += upperSpecial.charAt(Math.floor(Math.random() * upperSpecial.length));
  }
  return randUpperSpecial
}

// Lower + Number characters option 2/4 
function lowerNumbersString(string_length) {
  randLowerNumbers;
  var lowerNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
  for(var i, i = 0; i < string_length; i++){
    randLowerNumbers += lowerNumbers.charAt(Math.floor(Math.random() * lowerNumbers.length));
  }
  return randLowerNumbers
}

// Lower + Special characters option 2/4
function lowerSpecialString(string_length) {
  randLowerSpecial;
  var lowerSpecial = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length; i++){
    randLowerSpecial += lowerSpecial.charAt(Math.floor(Math.random() * lowerSpecial.length));
  }
  return randLowerSpecial
}

// Number + Special characters option 2/4
function numbersSpecialString(string_length) {
  randNumbersSpecial;
  var numbersSpecial = "0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length; i++){
    randNumbersSpecial += numbersSpecial.charAt(Math.floor(Math.random() * numbersSpecial.length));
  }
  return randNumbersSpecial
}

// Uppercase characters option 1/4
function upperOnlyString(string_length) {
  randUpperOnly;
  var uppercaseOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(var i, i = 0; i < string_length; i++){
    randUpperOnly += uppercaseOnly.charAt(Math.floor(Math.random() * uppercaseOnly.length));
  }
  return randUpperOnly
}

// Lowercase characters option 1/4
function lowerOnlyString(string_length) {
  randLowerOnly;
  var lowercaseOnly = "abcdefghijklmnopqrstuvwxyz";
  for(var i, i = 0; i < string_length; i++){
    randLowerOnly += lowercaseOnly.charAt(Math.floor(Math.random() * lowercaseOnly.length));
  }
  return randLowerOnly
}

// Number characters option 1/4 
function numbersOnlyString(string_length) {
  randNumbersOnly;
  var numbersOnly = "0123456789";
  for(var i, i = 0; i < string_length; i++){
    randNumbersOnly += numbersOnly.charAt(Math.floor(Math.random() * numbersOnly.length));
  }
  return randNumbersOnly
}

// Special characters option 1/4
function specialOnlyString(string_length) {
  randSpecialOnly;
  var specialOnly = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  for(var i, i = 0; i < string_length; i++){
    randSpecialOnly += specialOnly.charAt(Math.floor(Math.random() * specialOnly.length));
  }
  return randSpecialOnly
}

function createPassword(string_length) {
  console.log(string_length)
  if (checkUppercase && checkLowercase && checkNumbers && checkSpecial) {
    allCharactersString();
    document.getElementById("password").innerHTML = allCharactersString(string_length)
    } else if (checkUppercase && checkLowercase && checkNumbers && !checkSpecial) {
        upperLowerNumberString();
        document.getElementById("password").innerHTML = upperLowerNumbersString(string_length);

    } else if (checkUppercase && checkLowercase && checkSpecial && !checkNumbers) {
        upperLowerSpecialString();
        document.getElementById("password").innerHTML = upperLowerSpecialString(string_length);

    } else if (checkUppercase && checkNumbers && checkSpecial && !checkLowercase) {
        upperNumberSpecialString();
        document.getElementById("password").innerHTML = upperNumbersSpecialString(string_length);

    } else if (checkLowercase && checkNumbers && checkSpecial && !checkUppercase) {
        lowerNumbersSpecialString();
        document.getElementById("password").innerHTML = lowerNumbersSpecialString(string_length);

    } else if (checkUppercase && checkLowercase && !checkNumbers && !checkSpecial) {
        upperLowerString();
        document.getElementById("password").innerHTML = upperLowerString(string_length);

    } else if (checkUppercase && checkNumbers && !checkLowercase && !checkSpecial) {
        upperNumbersString();
        document.getElementById("password").innerHTML = upperNumbersString(string_length);

    } else if (checkUppercase && checkSpecial && !checkLowercase && !checkNumbers) {
        upperSpecialString();
        document.getElementById("password").innerHTML = upperSpecialString(string_length);

    } else if (checkLowercase && checkNumbers && !checkUppercase && !checkSpecial) {
        lowerNumbersString();
        document.getElementById("password").innerHTML = lowerNumberString(string_length);

    } else if (checkLowercase && checkSpecial && !checkUppercase && !checkNumbers) {
        lowerSpecialString();
        document.getElementById("password").innerHTML = lowerSpecialString(string_length);

    } else if (checkNumbers + checkSpecial && !checkUppercase && !checkLowercase) {
        numbersSpecialString();
        document.getElementById("password").innerHTML = numbersSpecialString(string_length);

    } else if (checkUppercase && !checkLowercase && !checkNumbers && !checkSpecial) {
        upperOnlyString();
        document.getElementById("password").innerHTML = upperOnlyString(string_length);

    } else if (checkLowercase && !checkUppercase && !checkNumbers && !checkSpecial) {
        lowerOnlyString();
        document.getElementById("password").innerHTML = lowerOnlyString(string_length);

    } else if (checkNumbers && !checkUppercase && !checkLowercase && !checkSpecial) {
        numbersOnlyString();
        document.getElementById("password").innerHTML = numbersOnlyString(string_length);

    } else if (checkSpecial && !checkUppercase && !checkLowercase && !checkNumbers) {
        specialOnlyString();
        document.getElementById("password").innerHTML = specialOnlyString(string_length);
    } else {
        alert("You must select at least one character type!");
        checkAmountConfirm();
    }
}
