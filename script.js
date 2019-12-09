// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

// cassidy's pusedo code

//Create a for loop that will run until all questions are answered

//alert asking "pick a number between 8 and 128, this will be the length of your password" use variable n

//if picks a number between 8 and 128, move on.

//else prompt them to pick again. Say "Hey, you did something wrong. We said between 8 and 12"

//Alert saying "Do you want the password to include a. special characters b. numeric characters c. lowercase characters or d. uppercase characters. Choose one: a, b, c or d."

//if picks one, move on

//else prompt user "Hey, you did some thing wrong. We said a,b,c, or d"

//use random number funtion that loops through n amount of times, then incorporates a,b,c or d to generate password

//end for loop

//write password to the screen
