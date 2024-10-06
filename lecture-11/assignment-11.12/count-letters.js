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

/* charIndex not needed!
const charIndex = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17,
  r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};
*/

function getCountOfLetters(str) {
  const charArr = str.split(""); // convert string into character array
  let charList = {}; // the result
  for(char of charArr) { // loop each letter in str
    char = char.toLowerCase(); // case insensitive counting
    if (char != " ") { // omit empty spaces
      if (!(char in charList)) {
        charList[char] = 1; // init object property (current letter) and set value to 1
      } else {
        charList[char]++; // increase letter count
      }
    }
  }
  return charList;
}

const result = getCountOfLetters("A black cat");
console.log(result); 
/* prints 
{
    a: 3,
    b: 1,
    c: 2,
    k: 1,
    l: 1,
    t: 1
} */
