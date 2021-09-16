// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var numOfChar = prompt('How many characters would you like in your Password?');
  if (numOfChar < 8) {
    alert('You need to have at least 8 characters');
    return;
  } else if (numOfChar > 128) {
    alert('You must have a password of less than 129 characters');
    return;
  } else {
    var upperCase = confirm('Would you like Upper case characters in your Password?')
    var lowerCase = confirm('Would you like Lower case characters in your Password?')
    var numbers = confirm('Would you like Numbers in your Password?')
    var special = confirm('Would you like Special characters in your Password?')
    if (upperCase 
      && !lowerCase 
      && !numbers 
      && !special) {
        var result = getRandomString1(numOfChar);
        return result;
    } else if (!upperCase 
      && lowerCase
      && !numbers
      && !special) {
        var result = getRandomString2(numOfChar);
        return result;
    } else if (!upperCase 
      && !lowerCase
      && numbers
      && !special) {
        var result = getRandomString3(numOfChar);
        return result;
    } else if (!upperCase 
      && !lowerCase
      && !numbers
      && special) {
        var result = getRandomString4(numOfChar);
        return result;
    } else if (upperCase 
      && lowerCase
      && !numbers
      && !special) {
        var result = getRandomString5(numOfChar);
        return result;
    } else if (upperCase 
      && !lowerCase
      && numbers
      && !special) {
        var result = getRandomString6(numOfChar);
        return result;
    } else if (!upperCase 
      && lowerCase
      && numbers
      && !special) {
        var result = getRandomString7(numOfChar);
        return result;
    } else if (upperCase 
      && !lowerCase
      && !numbers
      && special) {
        var result = getRandomString8(numOfChar);
        return result;
    } else if (!upperCase 
      && lowerCase
      && !numbers
      && special) {
        var result = getRandomString9(numOfChar);
        return result;
    } else if (!upperCase 
      && !lowerCase
      && numbers
      && special) {
        var result = getRandomString10(numOfChar);
        return result;
    } else if (upperCase 
      && !lowerCase
      && numbers
      && special) {
        var result = getRandomString11(numOfChar);
        return result;
    } else if (!upperCase 
      && lowerCase
      && numbers
      && special) {
        var result = getRandomString12(numOfChar);
        return result;
    } else if (upperCase
      && lowerCase
      && numbers
      && !special) {
        var result = getRandomString13(numOfChar);
        return result;
    } else if (upperCase
      && lowerCase
      && !numbers
      && special) {
        var result = getRandomString14(numOfChar);
        return result;
    } else if (upperCase
      && lowerCase
      && numbers
      && special) {
        var result = getRandomString15(numOfChar);
        return result;
    } else if (!upperCase
      && !lowerCase
      && !numbers
      && !special) {
        alert('No character types where chosen. Please start again.')
        generatePassword();
    } 
  }
  // debugger;
}

function getRandomString1(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString2(length) {
  var randomChars = 'abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString3(length) {
  var randomChars = '0123456789';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString4(length) {
  var randomChars = '~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString5(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString6(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString7(length) {
  var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString8(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString9(length) {
  var randomChars = 'abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString10(length) {
  var randomChars = '0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString11(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString12(length) {
  var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString13(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString14(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
function getRandomString15(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
  var result = '';
  for ( var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

console.log(getRandomString5(4));

// var randomCharsArray=[
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   ,'abcdefghijklmnopqrstuvwxyz'
//   ,'NUMS'
//   ,'chars'
// ];

// var optionsQuestion=[
//   'upper?'
//   , 'lower?'
//   , ''
//   ,''
// ];


// var randomCharFullString= '';
// for(var i=0;i<=3;i++){
//   if(alert(optionsQuestion[i])){
//     randomCharFullString+=randomCharsArray[i];

//   }
// }
