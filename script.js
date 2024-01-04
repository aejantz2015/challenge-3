// Assignment Code
var generateBtn = document.querySelector("#generate");

feature/add-ifs
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "x", "y", "z"];
var char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", ".", ",", "/"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword () {
  var passwordOption = [];
  var passwordLength = Number(prompt("How long would you like for your password to be? 8-128"))

  if(isNaN(passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be between 8-128 charaters")
    return
  }
  else {
    numbers = confirm("Would you like your password to have numbers?");

    lowerCase = confirm("Would you like your password to have lowercase letters?");

    upperCase = confirm("Would you like your password to have uppercase letters?");

    char = confirm("Would you like your password to have special characters?");

  }

  if (!numbers && !lowerCase && !upperCase && !char) {
    alert("Must have one selection made")
  }
  


  }






  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 main
