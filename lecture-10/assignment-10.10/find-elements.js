/* We have the following list of numbers:

[ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ]
a) Using a loop, find the first number that is above 20 and print it.

b) Do the same as in 1st, but use Array.find instead.

c) Using Array.findIndex, find the index of the first number 
  that is above 20 and print the index.

d) Using Array.splice, remove all elements that come after the index
  that you found in 3rd. Afterwards, print the whole array. */

const numbers = [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ];
console.log(`\nNumbers: ${numbers.toString()}`);

// a)
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    console.log(`\nFor loop: First number over 20 is ${numbers[i]}`);
    break;
  }
}

// b)
const over20 = numbers.find(number => number > 20);
console.log(`\nFind: First number over 20 is ${over20}`);

// c)
const over20Index = numbers.findIndex(number => number > 20);
console.log(`\nIndex of number ${over20} is ${over20Index}`);

// d)
numbers.splice((numbers.findIndex(number => number > 20) + 1 )); // include the found index
console.log(`\nNumbers before and including index ${over20Index} are: ${numbers.toString()}`);