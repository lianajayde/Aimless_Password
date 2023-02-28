//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Declaring variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var characterSymbols = "!@#$%^&*()_+";
var characterNumbers = "0123456789";

//Function for generate password button
function generatePassword() {
  console.log("Button works");

  var chars = "";
  var password = "";

  var passwordLength = prompt("Please enter a character amount between 8 and 128");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("It passed the correct length")
  var character = confirm("Do you want uppercase letters?");
  var lowcharacter = confirm("Do you want lower case letters?");
  var symbol = confirm("Do you want symbols?");
  var numbers = confirm("Do you want numbers?");
 
//If else statement to execute what the user wants from the password
  if(character === true){
    chars = upperCase
  }
  if (lowcharacter === true){
    chars = chars + lowerCase
  }
  if (symbol === true){
    chars = chars + characterSymbols
  }  
  if (numbers === true){
    chars = chars + characterNumbers
  }

  }
  else {
  //Alert message that password doesn't meet password requirements
    alert("It does not reach password requirements")
    console.log("It does not reach password requirements")
  }

///this is where im stuck
  for (let i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * chars.length);
    console.log(randomIndex);
    console.log(password);

    password += chars[randomIndex];
  }

  return "Generated password here";
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
