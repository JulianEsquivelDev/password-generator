// array holding users input
var passwrd = [];
// define id generate with querySelector and var
var generate = document.querySelector("#generate");
// arrays for different types of characters a user can choose from
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// create a click function
generate.addEventListener("click", function () {
  passW = generatePassword();
  document.getElementById("password").placeholder = passW;
});
// complete function to generate a random password and prompt user questions that allow them to make unique passwords that are then placed in the text box
function generatePassword() {
  // Ask user how long they want their password to be. User can choose any length between 8 and 128
  var range = window.prompt("Choose between 8 and 128 for your password length")
  range = parseInt(range);
  // if user does not choose password length alert them
  if (!range) {
    alert("You need to select how many characters you want in your password");
  } else if (range < 8 || range > 128) {
    // Start user prompts
      range = parseInt(prompt("You must choose between 8 and 128 in order to generate a random password"));
  } else {
        promptNum = confirm("Do you want to include numbers in your password?");
        promptChar = confirm("Do you want to include special characters in your password?");
        promptUppercase = confirm("Do you want to include uppercase letters in your password?");
        promptLowercase = confirm("Do you want to include lowercase letters in your password?");
  };
  // if statements for no prompts being answered
  if (!promptChar && !promptNum && !promptUppercase && !promptLowercase) {
      options = alert("Please try again. In order to generate a password you have to answer one of the prompts. ");
  } 
  // else if statements for all prompts being answered
  else if (promptChar && promptNum && promptUppercase && promptLowercase) {
      options = char.concat(num, lower, upper);
  }
  else if (promptChar && promptNum && promptUppercase) {
    options = char.concat(num, upper);
  }
  else if (promptChar && promptNum && promptLowercase) {
    options = char.concat(num, lower);
  }
  else if (promptChar && promptLowercase && promptUppercase) {
    options.char.concat(lower, upper);
  }
  else if (promptNum && promptLowercase && promptUppercase) {
    options.char.concat(lower, upper);
  }
  else if(promptChar && promptNum) {
    options.char.concat(num);
  }
  else if(promptChar && promptLowercase) {
    options.char.concat(lower);
  }
  else if(promptChar && promptUppercase) {
    options.char.concat(upper);
  }
  else if(promptLowercase && promptNum) {
    options.char.concat(num);
  }
  else if (promptLowercase && promptUppercase) {
    options.char.concat(upper);
  }
  else if(promptNum && promptUppercase) {
    options.char.concat(upper);
  }
  else if(promptChar) {
    options = char;
  }
  else if(promptNum) {
    options = num;
  }
  else if(promptLowercase) {
    options = lower;
  };
  // Use math random and math floor to generate password length
  for (var i = 0; i < range; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    passwrd.push(pickOptions);
  }
  var passW = passwrd.join("");
  capture(passW);
  return passW;
}
// use the id from the html to store final generated password in the text box
function capture(passW) {
  document.getElementById("password").textContent = passW;
}