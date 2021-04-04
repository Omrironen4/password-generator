// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
   var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var numberCase = [0,1,2,3,4,5,6,7,8,9];
   var specialCase = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","|","}","]","{","[",'"',"'",":",";","?","/",">",".","<",",","~","`"];
   var combinationCase = [];

   var passwordAnswer = window.prompt("How long do you want your password to be?") 
   if (passwordAnswer >= 8 && passwordAnswer <= 128) {
       console.log("password length",passwordAnswer)
       var upper = confirm("Do you want to use upper case letters?");
       var lower = confirm("Do you want to use lower case letters?");
       var number = confirm("Do you want to use numbers?");
       var special =confirm("Do you want to use special characters?");
        console.log(upper);
        console.log(lower);
        console.log(number);
        console.log(special);
        
        // var index = Math.floor(Math.random()*passwordAnswer)   
        var indexUpper =  upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(indexUpper);
        var indexLower =  lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(indexLower);
        var indexNumber=  numberCase[Math.floor(Math.random() * numberCase.length)];
        console.log(indexNumber);
        var indexSpecial =  specialCase[Math.floor(Math.random() * specialCase.length)];
        console.log(indexSpecial);
        for (var i=0; i<passwordAnswer;i++) {
                if (upper) {
                    combinationCase.push(indexUpper);
                } 
                if (lower) {
                    combinationCase.push(indexLower);
                }
                if (number) {
                    combinationCase.push(indexNumber);
                }
                if (special) {
                    combinationCase.push(indexSpecial);

                }
                window.prompt(combinationCase)
            }

        
        
        console.log(combinationCase)

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

