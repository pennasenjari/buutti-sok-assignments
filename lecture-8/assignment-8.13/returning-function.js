/* Create a function named minimum that takes 3 numbers as parameters.

The function should find the smallest of the given numbers and return it.

Call your function with different numbers as parameters to make sure it works. 
Forward the returned value to console.log to print the return value of your function.

DO NOT call console.log in the function itself, but instead call it after calling 
  your function. */

function minimum(n1, n2, n3) {
  return Math.min(n1, n2, n3);
}

const n1 = 5;
const n2 = 11;
const n3 = -2;

const min = minimum(n1, n2, n3);

console.log(`The smallest value of ${n1}, ${n2} and ${n3} is ${min}`);
