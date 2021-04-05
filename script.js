// generateBtn is a variable that is replacing the element of the button on the html file.
var generateBtn = document.querySelector("#generate");

//These are the arrays where we pull data from in order to generate random passwords.
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCase = [0,1,2,3,4,5,6,7,8,9];
var specialCase = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","|","}","]","{","[",'"',"'",":",";","?","/",">",".","<",",","~","`"];
// This array will include the new password that we will generate at the end.
var combinationCase = [];

//This function will take in data from the window prompt, and also take in data from 4 confirm windows. 
//This function will also use a for loop to generate random variables from our arrays and insert them into the combinationCase array
function generatePassword () {
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
        
        for (var i=0; i<passwordAnswer;) {
            //if the confirm method is true for upper, we will continue with the loop.
                if (upper) {
                    //if the iteration is bigger than or equal than the password length desired, the for loop will return.
                    if (i>=passwordAnswer){
                        return;
                    }
                    //Here we generate a random index from the upperCase array which gets us an upper case value, and we push it into the combination array.
                    var indexUpper =  upperCase[Math.floor(Math.random() * upperCase.length)];
                     combinationCase.push(indexUpper);
                     //Here we want to add an iteration 
                     i++;
                     //Here we log our information into combination case.
                     console.log(combinationCase)
                     
                     // The rest of the if stements match the pattern described above/
                }           
                if (lower) {
                    if (i>=passwordAnswer){
                        return;}
                    var indexLower =  lowerCase[Math.floor(Math.random() * lowerCase.length)];
                    combinationCase.push(indexLower);
                    i++;
                    console.log(combinationCase)
                }
                if (number) {
                    if (i>=passwordAnswer){
                        return;}
                    var indexNumber =  numberCase[Math.floor(Math.random() * numberCase.length)];
                    combinationCase.push(indexNumber);
                    i++;
                    console.log(combinationCase)
                }
                if (special) {
                    if (i>=passwordAnswer){
                        return;}
                    var indexSpecial =  specialCase[Math.floor(Math.random() * specialCase.length)];
                    combinationCase.push(indexSpecial);
                    i++;
                    console.log(combinationCase)
                }
                
            }
   // Here, if the user put anything other than 8-128 characters for the password length, an error will be displayed via alert.
   } else {
       alert("Error! Does not meet password criteria. Must be between 8 and 128 characters.");
   }

}

function writePassword() {
  generatePassword();                                       // here we are calling the generatePasword function.
  var passwordText = document.querySelector("#password");    // This replaces the password area in the html and assigns it a new value
  passwordText.value = combinationCase.join(('')); // the passwordText value gets reassigned to equal the combinationCase array, so the password can be displayed nicely in the middle.
}

generateBtn.addEventListener("click", writePassword); // this adds an event listener of click to the generateBtn. When the button is clicked, our writePassword function runs, and the entire password generator begins its process. 



