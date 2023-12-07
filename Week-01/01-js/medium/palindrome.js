/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function purifyString(lowerCaseString, direction){
  // function to exclude all the other characters except a-z
  let purifiedString = ''

  if(direction == 'forward'){
    for(let i=0; i<lowerCaseString.length; i++){
      if(lowerCaseString.charCodeAt(i) >= 97 && lowerCaseString.charCodeAt(i) <= 122){
        if(lowerCaseString[i]!==' '){
          purifiedString = purifiedString + lowerCaseString[i]
        }
      }
    }
  }else{
    for(let i=lowerCaseString.length-1; i>=0; i--){
      if(lowerCaseString.charCodeAt(i) >= 97 && lowerCaseString.charCodeAt(i) <= 122){
        if(lowerCaseString[i]!==' '){
          purifiedString = purifiedString + lowerCaseString[i]
        }
      }
    }
  }

  return purifiedString
}

function isPalindrome(str) {
  // function to check palindrome or not
  const lowerCaseString = str.toLowerCase()
  const reversePurification = purifyString(lowerCaseString, 'reverse')
  const forwardPurification = purifyString(lowerCaseString, 'forward')
  if(reversePurification == forwardPurification){
    return true
  }else{
    return false 
  }

}

module.exports = isPalindrome;
