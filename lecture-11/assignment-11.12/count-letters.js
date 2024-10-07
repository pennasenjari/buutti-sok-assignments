/* This assignment continues assignment 24 from lecture 9.

Now build on this earlier assignment and do the following:

Create a function getCountOfLetters that calculates the count of each letter in a string
 and returns the information, this time in an object.

For example:

const result = getCountOfLetters("a black cat");
console.log(result);
/* prints 
{
    a: 3,
    b: 1,
    c: 2,
    k: 1,
    l: 1,
    t: 1
}
*/

const charIndex = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17,
  r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

function getCountOfLetters(str) {
  const charArr = str.split(""); // convert string into character array
  let charObj = {}; // the result
  // loop charIndex to sort result alphabetically
  for(char of Object.keys(charIndex)) {
    for (i = 0; i < charArr.length; i++) { // loop given string
      if (charArr[i] != " ") { // omit empty spaces
        charArr[i] = charArr[i].toLowerCase(); // case insensitive
        if (char === charArr[i]) {
          if (!(charArr[i] in charObj)) {
            /* The property (letter) doesn't exist yet. 
               Create and set value to 1. */
            charObj[char] = 1; 
          } else {
            charObj[char]++; // increase letter count
          }
        }
      }
    }
  }
  return charObj;
}

const result = getCountOfLetters("A black cat");
console.log(result);  // { a: 3, b: 1, c: 2, k: 1, l: 1, t: 1 }