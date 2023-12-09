/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sortString(str){

  for(let i = 0; i<=str.length; i++){
    for(let j = 0; j<str.length - i; j++){
      let temp = ''
      if(str[j] > str[j+1]){
          temp = str[j]
          str[j] = str[j+1]
          str[j+1] = temp
      }
    }
  }

  return str.join('')
}

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false
  }
  else{
    const result1 = sortString(str1.toLowerCase().split(''))
    const result2 = sortString(str2.toLowerCase().split(''))
    if(result1 == result2){
      return true
    }
    else{
      return false
    }
  }
}

module.exports = isAnagram;
