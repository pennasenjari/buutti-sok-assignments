/* Create a function getCountOfLetters that calculates the count 
  of each letter in a string and returns the information in an array. 
Use the charIndex object above as a reference for each character's index in the array,
  but reduce the indexes by one so that 'a' becomes 0, 'b' becomes 1 and so on.

For example:

const result = getCountOfLetters("a black cat");
// prints [ 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, ... 1, 0, 0, 0, 0, 0, 0  ]
console.log(result); 
// corresponding letters:    a  b  c  d  e  f  g, h, i, j, k, l, ... t, u, v, w, x, y, z
*/

const charIndex = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17,
  r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

function getCountOfLetters(str) {
  const charArr = str.split(""); // Convert string into character array
  let charCountArr = []; // The result
  for(let char in charIndex) { // Loop each letter in charIndex
    let count = 0;
    for (i = 0; i < charArr.length; i++) { // Loop the characters in given string
      // Case insensitive comparison
      if (char.toLowerCase() === charArr[i].toLowerCase()) {
        count++;
      }
    }
    charCountArr.push(count);
  }
  return charCountArr;
}

const result = getCountOfLetters("A black cat");
console.log(result); 
/* prints [
  3, 1, 2, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 0, 0,
  0, 0
] */


