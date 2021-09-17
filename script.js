// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword() || '';
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
    var ruleArray = [];
    ruleArray.push({
      AvailableCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      , prompt: confirm('Would you like Upper case characters in your Password?')
    });
    ruleArray.push({
      AvailableCharacters: 'abcdefghijklmnopqrstuvwxyz'
      , prompt: confirm('Would you like Lower case characters in your Password?')
    });
    ruleArray.push({
      AvailableCharacters: '0123456789'
      , prompt: confirm('Would you like Numbers in your Password?')
    });
    ruleArray.push({
      AvailableCharacters: '~`!@#$%^&*()_+-=[]{}|;:,<.>/?'
      , prompt: confirm('Would you like Special characters in your Password?')
    });
    var availableCharacters = '';
    for (var i = 0; i < ruleArray.length; i++) {
      if (ruleArray[i].prompt == true) {
        availableCharacters += ruleArray[i].AvailableCharacters;
      } 
    }
    if (availableCharacters === '') {
      alert('No character types where chosen. Please start again.')
    }
    var result = getRandomString(numOfChar, availableCharacters);
    return result;
  }
}
function getRandomString(length, randomChars) {
  var result = '';
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
    //=============================================================================================================================================
    // This chunk is from V2 and i have refactored the code again to make it less robust. Lines 26 - 42
    // var upperCase = confirm('Would you like Upper case characters in your Password?')
    // var lowerCase = confirm('Would you like Lower case characters in your Password?')
    // var numbers = confirm('Would you like Numbers in your Password?')
    // var special = confirm('Would you like Special characters in your Password?')
    // var stringArray = [
    //   'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //   , 'abcdefghijklmnopqrstuvwxyz'
    //   , '0123456789'
    //   , '~`!@#$%^&*()_+-=[]{}|;:,<.>/?'
    // ];
    //=============================================================================================================================================
    // This was my first attempt (below), everything works. However i wanted to refactor it to be more universal. Lines 178 - 285

    // if (upperCase 
    //   && !lowerCase 
    //   && !numbers 
    //   && !special) {
    //     var result = getRandomString1(numOfChar);
    //     return result;
    // } else if (!upperCase 
    //   && lowerCase
    //   && !numbers
    //   && !special) {
    //     var result = getRandomString2(numOfChar);
    //     return result;
    // } else if (!upperCase 
    //   && !lowerCase
    //   && numbers
    //   && !special) {
    //     var result = getRandomString3(numOfChar);
    //     return result;
    // } else if (!upperCase 
    //   && !lowerCase
    //   && !numbers
    //   && special) {
    //     var result = getRandomString4(numOfChar);
    //     return result;
    // } else if (upperCase 
    //   && lowerCase
    //   && !numbers
    //   && !special) {
    //     var result = getRandomString5(numOfChar);
    //     return result;
    // } else if (upperCase 
    //   && !lowerCase
    //   && numbers
    //   && !special) {
    //     var result = getRandomString6(numOfChar);
    //     return result;
    // } else if (!upperCase 
    //   && lowerCase
    //   && numbers
    //   && !special) {
    //     var result = getRandomString7(numOfChar);
    //     return result;
    // } else if (upperCase 
    //   && !lowerCase
    //   && !numbers
    //   && special) {
    //     var result = getRandomString8(numOfChar);
    //     return result;
    // } else if (!upperCase 
    //   && lowerCase
    //   && !numbers
    //   && special) {
    //     var result = getRandomString9(numOfChar);
    //     return result;
    // } else if (!upperCase 
    //   && !lowerCase
    //   && numbers
    //   && special) {
    //     var result = getRandomString10(numOfChar);
    //     return result;
    // } else if (upperCase 
    //   && !lowerCase
    //   && numbers
    //   && special) {
    //     var result = getRandomString11(numOfChar);
    //     return result;
    // } else if (!upperCase 
    //   && lowerCase
    //   && numbers
    //   && special) {
    //     var result = getRandomString12(numOfChar);
    //     return result;
    // } else if (upperCase
    //   && lowerCase
    //   && numbers
    //   && !special) {
    //     var result = getRandomString13(numOfChar);
    //     return result;
    // } else if (upperCase
    //   && lowerCase
    //   && !numbers
    //   && special) {
    //     var result = getRandomString14(numOfChar);
    //     return result;
    // } else if (upperCase
    //   && lowerCase
    //   && numbers
    //   && special) {
    //     var result = getRandomString15(numOfChar);
    //     return result;
    // } else if (!upperCase
    //   && !lowerCase
    //   && !numbers
    //   && !special) {
    //     alert('No character types where chosen. Please start again.')
    //     generatePassword();
    // } 
    //===============================================================================================================================================
    // Below is the refactored V2 'if' branch using the universal getRandomString function, then i refactored once more to turn this 'if else' branch 
    //  into a 'for' loop. Lines 44 - 48 

    // if (upperCase
    //   && !lowerCase
    //   && !numbers
    //   && !special) {
    //   var result = getRandomString(numOfChar, stringArray[0]);
    //   return result;
    // } else if (!upperCase
    //   && lowerCase
    //   && !numbers
    //   && !special) {
    //   var result = getRandomString(numOfChar, stringArray[1]);
    //   return result;
    // } else if (!upperCase
    //   && !lowerCase
    //   && numbers
    //   && !special) {
    //   var result = getRandomString(numOfChar, stringArray[2]);
    //   return result;
    // } else if (!upperCase
    //   && !lowerCase
    //   && !numbers
    //   && special) {
    //   var result = getRandomString(numOfChar, stringArray[3]);
    //   return result;
    // } else if (upperCase
    //   && lowerCase
    //   && !numbers
    //   && !special) {
    //   var string = stringArray[0] + stringArray[1];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (upperCase
    //   && !lowerCase
    //   && numbers
    //   && !special) {
    //   var string = stringArray[0] + stringArray[2];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (!upperCase
    //   && lowerCase
    //   && numbers
    //   && !special) {
    //   var string = stringArray[1] + stringArray[2];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (upperCase
    //   && !lowerCase
    //   && !numbers
    //   && special) {
    //   var string = stringArray[0] + stringArray[3];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (!upperCase
    //   && lowerCase
    //   && !numbers
    //   && special) {
    //   var string = stringArray[1] + stringArray[3];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (!upperCase
    //   && !lowerCase
    //   && numbers
    //   && special) {
    //   var string = stringArray[2] + stringArray[3];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (upperCase
    //   && !lowerCase
    //   && numbers
    //   && special) {
    //   var string = stringArray[0] + stringArray[2] + stringArray[3];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (!upperCase
    //   && lowerCase
    //   && numbers
    //   && special) {
    //   var string = stringArray[1] + stringArray[2] + stringArray[3];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (upperCase
    //   && lowerCase
    //   && numbers
    //   && !special) {
    //   var string = stringArray[0] + stringArray[1] + stringArray[2];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (upperCase
    //   && lowerCase
    //   && !numbers
    //   && special) {
    //   var string = stringArray[0] + stringArray[1] + stringArray[3];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (upperCase
    //   && lowerCase
    //   && numbers
    //   && special) {
    //   var string = stringArray[0] + stringArray[1] + stringArray[2] + stringArray[3];
    //   var result = getRandomString(numOfChar, string);
    //   return result;
    // } else if (!upperCase
    //   && !lowerCase
    //   && !numbers
    //   && !special) {
    //   alert('No character types where chosen. Please start again.')
    //   generatePassword();
    // }
//=============================================================================================================
// First pass is below, refactored v2 is above in Lines 56 - 62

// function getRandomString1(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString2(length) {
//   var randomChars = 'abcdefghijklmnopqrstuvwxyz';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString3(length) {
//   var randomChars = '0123456789';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString4(length) {
//   var randomChars = '~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString5(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString6(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString7(length) {
//   var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString8(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString9(length) {
//   var randomChars = 'abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString10(length) {
//   var randomChars = '0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString11(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString12(length) {
//   var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString13(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString14(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }
// function getRandomString15(length) {
//   var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+-=[]{}|;:,<.>/?';
//   var result = '';
//   for ( var i = 0; i < length; i++) {
//       result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//   }
//   return result;
// }

//=====================================================================================================================

// random chunk of code my father and i were brainstroming with 

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
