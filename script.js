var generateBtn = document.getElementById("bgnBtn");
var passwordInputEl = document.getElementById("password");


generateBtn.addEventListener("click", promptMe)

function promptMe(event) {
    event.preventDefault();
    var passwordLength = Number(prompt("How long do you want the password to be? Enter a number between 8 and 128"));
    var charSpec = confirm("Do you want special characters?");
    var charNum = confirm("Do you want numeric characters?");
    var charUpper = confirm("Do you want uppercase characters?");
    var charLower = confirm("Do you want lowercase characters?");


    var generatedPassword = generatePassword(passwordLength, charSpec, charNum, charUpper, charLower);
}


function generatePassword(passwordLength, charSpec, charNum, charUpper, charLower) {

    var charSet = "cat";


    if (charSpec === true) {
        charSet = "!@#$%^&*()_+" + charSet;

    }

    if (charNum === true) {
        charSet = "0123456789" + charSet;
    }

    if (charUpper === true) {
        charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + charSet;
    }

    if (charLower === true) {
        charSet = "abcdefghijklmnopqrstuvwxyz" + charSet;
    }

    var retVal = "";
    for (var i = 0; i < passwordLength; i++) {
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }


    passwordInputEl.value = retVal

    return retVal;
}
