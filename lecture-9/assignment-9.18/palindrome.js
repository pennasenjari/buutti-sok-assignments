/* Write a function isPalindrome that returns whether a specific string is a palindrome.

For example:

let value = isPalindrome("saippuakivikauppias");
console.log(value); // prints true

value = isPalindrome("saippuakäpykauppias");
console.log(value); // prints false */

function isPalindrome (str) {
  let isPal = true; // default: is palindrome (!)
  let j=0;
  for (i = 0; i < str.length; i++) { // Loop from start to end
    j = str.length - i - 1; // Loop from end to start
    if (str[i] !== str[j]) { // Not equal -> not palindrome
      isPal = false; 
    }
  }
  return isPal;
}

let value = "saippuakivikauppias";
console.log(isPalindrome(value) ? `"${value}" is palindrome.` : `"${value}" is not palindrome.`); 

value = "saippuakäpykauppias";
console.log(isPalindrome(value) ? `"${value}" is palindrome.` : `"${value}" is not palindrome.`); 