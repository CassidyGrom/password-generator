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

//FUNCTIONS

//VARIABLES
// ===============================================================================

//Create a for loop that will run until all questions are answered

//prompt asking "pick a number between 8 and 128, this will be the length of your password" use variable n

while (length !== null) {
  var length = prompt(
    "Pick a number between 8 and 128, this will be the length of your Password."
  );

  // if (length === "8") {
  //   thanks();
  // }
}
//if picks a number between 8 and 128, move on.

//else prompt them to pick again. Say "Hey, you did something wrong. We said between 8 and 12"

//if picks a number between 8 and 128, move on.

//else prompt them to pick again. Say "Hey, you did something wrong. We said between 8 and 12"

//Alert saying "Do you want the password to include a. special characters b. numeric characters c. lowercase characters or d. uppercase characters. Choose one: a, b, c or d."

// Looping through each item in the array and logging a message to the console.

//if picks one, move on

//else prompt user "Hey, you did some thing wrong. We said a,b,c, or d"

//use random number funtion that loops through n amount of times, then incorporates a,b,c or d to generate password

//end for loop

//write password to the screen
