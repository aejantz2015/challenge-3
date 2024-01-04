// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvqxyz";
  var char = "!@#$%^&*()-+=.,/";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  passwordText.value = password;

}
var usersChoice = prompt("How long would you like for the password to be")
var usersChoice2 = prompt("Would you like your password to have numbers?")
var usersChoice3 = prompt("Would you like your password to have lowercase letters?")
var usersChoice4 = prompt("Would you like your password to have uppercase letters?")
var usersChoice5 = prompt("Would you like your password to have special characters?")




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


