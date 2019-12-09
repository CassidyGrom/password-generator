// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

function generatePassword() {
  console.log("generatePassword()");
  var options = getUserOptions();
  var password = buildPassword(options);
  return password;
}

function getUserOptions() {
  var length = prompt("What length?");
  if (typeof length === "string" && !isNaN(length)) {
    length = parseInt(length);
    if (length < 8 || length > 128) {
      getUserOptions();
    }
  } else {
    getUserOptions();
  }

  var special = confirm("Has Special Char");
  var numerical = confirm("Has Numerical Characters");
  var lowerChar = confirm("Has Lowercase Characters");
  var upperChar = confirm("Has Uppercase Characters");

  if (!special && !numerical && !lowerChar && !upperChar) {
    return getUserOptions();
  } else {
    var options = {
      length,
      special,
      numerical,
      lowerChar,
      upperChar
    };
    return options;
  }
}

function randomNumber(lowerBound, upperBound) {
  var differece = upperBound - lowerBound + 1;
  return Math.floor(Math.random() * differece) + lowerBound;
}

// var special = ["&"]
// var num = [4]
// var low = "a";

// var final = special.concat(num)
// final = final.concat(low);
// console.log(final);

function buildPassword(options) {
  var password = [];
  var possiblePasswordChars = [];

  if (options.special) {
    // 33-47
    password.push(String.fromCharCode(randomNumber(33, 47)));
    for (var i = 33; i <= 47; i++) {
      possiblePasswordChars.push(String.fromCharCode(i));
    }
  }
  if (options.numerical) {
    password.push(String.fromCharCode(randomNumber(48, 57)));
    for (var i = 48; i <= 57; i++) {
      possiblePasswordChars.push(String.fromCharCode(i));
    }
  }
  if (options.lowerChar) {
    password.push(String.fromCharCode(randomNumber(97, 122)));
    for (var i = 97; i <= 122; i++) {
      possiblePasswordChars.push(String.fromCharCode(i));
    }
  }
  if (options.upperChar) {
    password.push(String.fromCharCode(randomNumber(65, 90)));
    for (var i = 65; i <= 90; i++) {
      possiblePasswordChars.push(String.fromCharCode(i));
    }
  }

  for (var i = password.length; i < options.length; i++) {
    var randIndex = Math.floor(Math.random() * possiblePasswordChars.length);
    password.push(possiblePasswordChars[randIndex]);
  }

  return password.join("");
}
// BONUS EVENT LISTENER

// cassidy's pusedo code

//FUNCTIONS

//VARIABLES
// ===============================================================================
var length;
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
var test = {
  thanks: function() {
    alert("Thanks yo. Moving on.");
  },

  thanks2: function() {
    alert("Thanks for the letter. Generating your password");
  },

  tryAgain: function() {
    alert("Hey, you did something wrong. We said between 8 and 12");
  },

  tryAgain2: function() {
    alert("Hey, you did something wrong. We said s, n, l or u.");
  },

  uppercase: function() {
    for (lengthInteger; +1; ) {
      result += characters.charAt(
        Math.floor(Math.random() * (lengthInteger + 1))
      );
    }
    return result;
  }
};

//wrap this all in the genearte password function, i think?

//Create a while loop that will run until all questions are answered
// while (length !== null) {
//   //prompt asking "pick a number between 8 and 128, this will be the length of your password" use variable n
//   var length = prompt(
//     "Pick a number between 8 and 128, this will be the length of your Password."
//   );

//   // Convert user's string into a real number
//   var lengthInteger = parseInt(length);
//   alert("You said" + " " + lengthInteger);

//   //see if the variable is between 8 and 128, if yes, say thanks and move on

//   if (7 < lengthInteger && 127 > lengthInteger) {
//     test.thanks();

//     //promt saying "Do you want the password to include special characters, numeric characters, lowercase characters or uppercase characters. Choose one: s, n, l or u."

//     var PasswordKind = prompt(
//       "Do you want the password to include special characters, numeric characters, lowercase characters or uppercase characters. Choose one: s, n, l or u."
//     );

//     if (
//       PasswordKind === "s" ||
//       PasswordKind === "n" ||
//       PasswordKind === "l" ||
//       PasswordKind === "u"
//     ) {
//       test.thanks2();

//       //string.toUpperCase wrapped around random command wrapped around lengthInteger
//       if (PasswordKind === "u") {
//         test.uppercase();
//       }
//       writePassword(test.uppercase());
//     }
//     //if no, Say "Hey, you did something wrong. We said between 8 and 12"
//     else {
//       test.tryAgain2();
//     }
//   }
//   //if no, Say "Hey, you did something wrong. We said between 8 and 12"
//   else {
//     test.tryAgain();
//     //make them go back to the top, and start over
//   }
//   //End while loop
// }

//use random number funtion that loops through n amount of times, then incorporates a,b,c or d to generate password

//end for loop

//write password to the screen
