function isPalindrome(word){
  // Write your algorithm here
  const wordArray = word.split("")
  const wordArrayReverse = [...wordArray]
  wordArrayReverse.reverse()
  const wordArrayString = wordArray.toString()
  const wordArrayReverseString = wordArrayReverse.toString()
  if(wordArrayString === wordArrayReverseString){
    return true
  } else {
    return false
  }
}

console.log('=>', isPalindrome('abba'))


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;