
var userChoices= [];
var characters =[];
var product= [];
var numbs = "0123456789".split("");
var lower= "abcdefghijklmnopqrstuvwxyz".split("");
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var special= "!+-_.@#$%^&*()^/;[]{}<>?~`.".split("");


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  userChoices= [];
  characters= [];
  product= [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var passwordLength = generatePrompts();
  for(var i = 0; i < passwordLength; i++){
    var randomIndex= Math.floor(Math.random() * userChoices.length)
    var finalPassword = userChoices[randomIndex];
    product.push(finalPassword);
  }
}

function generatePrompts() {
    console.log ('Hey! You clicked the button')
    characters= [];
    var passwordLength= prompt ("How many characters would you like to include? Must be between 8 and 128."); 
    
      if (!passwordLength) {
        window.alert("You must enter a value between 8 and 128 characters.");
      }
     if (isNaN (passwordLength) || passwordLength <8 || passwordLength >128) {
       passwordLength= window.prompt("You must enter a value etween 8 and 128 characters.");
     }
  
      if (numbs= window.confirm ("Include numeric characters?"));{
      userChoices = userChoices.concat(numbs);}
  
      if (special= window.confirm ("Include special characters?"));{
      userChoices = userChoices.concat(special);}

      if (upper=window.confirm ("Include uppercase characters?"));{
      userChoices = userChoices.concat(upper);}
      
      if (lower= window.confirm ("Include lowercase characters?"));{
      userChoices = userChoices.concat(lower);}
    
      return password;}
