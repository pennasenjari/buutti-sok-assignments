/* Create a program that counts a sum like 1 + 2 + 3... until it exceeds 10000
  and prints the last number that was added to the sum.

Use your preferred loop method for this (while or for loop with a fitting condition,
  or infinite while loop with a break statement). */

let i = 0;
let sum = 0;
const max = 10000;

while (true) {
  if ((sum + i) > max) {
    console.log(`Last number added before exceeding ${max} was ${i}.`);
    break;
  }
  sum += i; 
  i++;
}