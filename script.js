// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "x", "y", "z"];
var char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", ".", ",", "/"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword() {
  var passwordOption = [];
  var passwordLength = Number(prompt("How long would you like for your password to be? 8-128"))

  if (isNaN(passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be between 8-128 charaters")
    return
  }
  else {
    var useNumbers = confirm("Would you like your password to have numbers?");

    var useLowerCase = confirm("Would you like your password to have lowercase letters?");

    var useUpperCase = confirm("Would you like your password to have uppercase letters?");

    var useChar = confirm("Would you like your password to have special characters?");
    
  }

  if (!useNumbers && !useLowerCase && !useUpperCase && !useChar) {
    alert("Must have one selection made")
    return;
  }

  if (useNumbers) {
  passwordOption = passwordOption.concat(numbers);
}

  if (useLowerCase) {
  passwordOption = passwordOption.concat(lowerCase);
}

  if (useUpperCase) {
  passwordOption = passwordOption.concat(upperCase);
}

  if (useChar) {
  passwordOption = passwordOption.concat(char);
}

var generatedPassword = [];
 for (let i = 0; i < passwordLength; i++) {
  var x = Math.floor(Math.random() * passwordOption.length);
  var generatedPassword = generatedPassword.concat(passwordOption[x]);
 }

return (generatedPassword = generatedPassword.join(""));


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

