/* Create a new array with the following elements:

['the', 'quick', 'brown', 'fox']
First, print the whole array.
Then print the second and third elements of the array (indexes 1 and 2).
As usual, test to make sure your program works. */

const arr = ['the', 'quick', 'brown', 'fox'];
console.log(arr);
console.log(arr[1], arr[2]);

// Extra example
const elements = ['Fire', 'Air', 'Water'];

console.log("\n" + elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"