function isPalindrome(word) {
  // Write your algorithm here
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }

  const length = word.length;
  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }
  return true;

}

/* 
  Add your pseudocode here
  Function isPalindrome(word):
  If typeof(word) is not 'string':
    Throw an error with the message "Input must be a string"

  Initialize a variable length to store the length of the word
  Initialize a loop that iterates from 0 to length / 2, using a variable i
    Inside the loop:
      Compare word[i] with word[length - 1 - i]
      If they are not equal:
        Return false

  If the loop completes without finding any mismatches:
    Return true

End function

*/

/*
  Add written explanation of your solution here
//    Check if the input is not a string if not add an error.
//    Calculate the length of (word) and then store it in the length variable.
//   I used a loop that runs from 0 to lenght / 2. I used this because i only need to compare characters up to the middle 
  of the word.
//    Inside the loop, we compare characters from the start (word[i]) and the end (word[length - 1 - i]) of the word. 
//    If they are not equal, we immediately return false because this indicates that the word is not a palindrome.
//    If the loop completes without finding any mismatches, we return true, indicating that the input word is a palindrome.
       
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deified"));

  console.log("");


}

module.exports = isPalindrome;
