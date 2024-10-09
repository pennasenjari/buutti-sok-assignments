/* Create a program that creates a Caesar Cipher (https://en.wikipedia.org/wiki/Caesar_cipher)
The program should take one command line parameter, the number representing the amount of
 shifting in the cipher. 

If a command line parameter is not given, or the parameter is invalid (not an integer),
 the program should give an error message and quit.

The program should read a text file input.txt, create a ciphered version of it, 
 and store the result in a file called output.txt.

Extra: Since Node doesn't accept negative numbers as command line parameters
 (at least without some effort), you can't decipher the encoded messages by just giving
 a negative number as the cipher shift. Come up with an alternate solution, so that your
 program can also be used to decipher messages. */

/* -------------------------------------------------------------------------------------
NOTE: To run  this file in Visual Studio Code extension CodeRunner, switch the CodeRunner
setting "File directory as Cwd" to true. */

import fs from 'fs';

const charIndex = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17,
  r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

const findKeyByValue = (obj, value) => {
  return Object.keys(obj).find(key => obj[key] === value) || null;
};

const cipher = (text, shift) => {
  let newText = "", char = "", newChar = "", newValue = 0;
  // Maximum shift is 25 up or down. Shift 26 would be the same letter.
  if (typeof shift !== "number" || shift < -25 || shift > 25) {
    console.log(`Shift ${shift} is not valid. Give an integer -25 ... 25.`);
    return "";
  }
  for (char of text) {
    newChar = char; // default: return unchanged
    if ((char.toLowerCase()) in charIndex) { // case insensitive comparison
      const value = charIndex[(char.toLowerCase())];
      newValue = value + shift;
      if (newValue > 26) {
        // over the upper range of index; go back to start of index
        newValue -= 26;
      } else if (newValue < 1) {
        // over the lower range of index; go back to end of index
        newValue += 26;
      }
      newChar = findKeyByValue(charIndex, newValue);
    }
     // Always return uppercase text
    newText += newChar.toUpperCase();
  }
  return newText;   
}

const text = fs.readFileSync('input.txt', 'utf8');
console.log(`\nOrigial text: ${text}`);
// Note: shift not implemented as command line parameter
let shift = 3; // -25 ... 25

if (text.length < 1) {
  console.log("Text input is too short.");
} else  {
  let ciphered = cipher(text, shift);
  if (ciphered.length > 0) {
    console.log(`Ciphered text: ${ciphered}`);
    fs.writeFileSync('output.txt', ciphered, 'utf8');

    // decipher
    shift = -(shift);
    console.log(`\nOrigial text: ${ciphered}`);
    const deciphered = cipher(ciphered, shift);
    console.log(`Deciphered text: ${deciphered}`);
    fs.writeFileSync('output_deciphered.txt', deciphered, 'utf8');
  }
}