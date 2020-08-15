var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var numeric = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];

var symbol = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "[",
  "{",
  "}",
  "]",
  "\\",
  ";",
  ":",
  "'",
  ";",
  ":",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
  "`",
  "~"
];


function passwordOptions() {

  // ask if user for lowercase letters
  var lowerCase = confirm("Click ok if you want lowercase letters!")

  // ask if user for uppercase letters
  var upperCase = confirm("Click ok if you want uppercase letters!")
  // ask if symbols
  var character = confirm("Click ok if you want symbols!")
  // ask if digtis
  var numbers = confirm("Click ok if you want numbers!")

  // make conditional statments to check whether they picked at least one option
  if (
    lowerCase === false &&
    upperCase === false &&
    character === false &&
    numbers === false
  ) {
    alert("You must pick at least one option");
    return passwordOptions();
  }
  var characterChoices = {
    lowerCase: lowerCase,
    upperCase: upperCase,
    character: character,
    numbers: numbers
  };

  return characterChoices;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // how many characters in password
  var passwordLength = window.prompt("Enter password length");
  // convert to an int
  var passwordInt = parseInt(passwordLength)
  // check if character amount is within 8 - 128 characters
  if (passwordInt >= 8 && passwordInt <= 128) {

  } else {
    window.alert("Invalid character amount")
    generatePassword()
  }
  var trueValues = [];
  // pull in password options
  var object = passwordOptions()
  // make conditional statments to check whether they picked at least one option

  if (object.lowerCase === true) {
    trueValues.push(...lowercase)
  }
  if (object.upperCase === true) {
    trueValues.push(...uppercase)
  }
  if (object.character === true) {
    trueValues.push(...symbol)
  }
  if (object.numbers === true) {
    trueValues.push(...numeric)
  }

  // randomize and select values from a set number length

  var result = [];
  for (var i = 0; i < passwordLength; i++) {
    result.push(trueValues[Math.floor(Math.random() * trueValues.length)]);
    console.log(result.join(''))
  }

  return result.join('');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
