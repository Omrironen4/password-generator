// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
   var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var numberCase = [0,1,2,3,4,5,6,7,8,9];
   var specialCase = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","|","}","]","{","[",'"',"'",":",";","?","/",">",".","<",",","~","`"];
   var combinationCase = []

   var passwordAnswer = window.prompt("How long do you want your password to be?") 
   if (passwordAnswer >= 8 && passwordAnswer <= 128) {
       var upper = confirm("Do you want to use upper case letters?");
       var lower = confirm("Do you want to use lower case letters?");
       var number = confirm("Do you want to use numbers?");
       var special =confirm("Do you want to use special characters?");
        console.log(upper);
        console.log(lower);
        console.log(number);
        console.log(special);

        if (upper) {
            combinationCase.push(upperCase);
        } 
        if (lower) {
            combinationCase.push(lowerCase);
        }
        if (number) {
            combinationCase.push(numberCase);
        }
        if (special) {
            combinationCase.push(specialCase)
        }

   } else {
       alert("Error! Does not meet password criteria. Must be between 8 and 128 characters.");
   }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
