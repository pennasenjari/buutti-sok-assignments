/* Write a function that takes either 2 or 3 parameters, then calculates the sum of
  these parameters and returns the result.

Do this three times:

Using a named function
Using an anonymous function
Using an arrow function
Extra: Do this using an arrow function without curly braces. */

function sumNamed(a, b, c = 0) {
  return a + b + c;
}

const sumAnonymous = function(a, b, c = 0) {
  return a + b + c;
}

const sumArrow = (a, b, c = 0) => {return a + b + c};

console.log(`Named function returns ${sumNamed(3, 4)}`); // c = default value
console.log(`Anonymous function returns ${sumAnonymous(3,4)}`); // c = default value
console.log(`Arrow function returns ${sumArrow(3, 4, 10)}`); // c = 10

// Extra
const sumArrow2 = (a, b, c = 0) => a + b + c;
console.log(`Arrow function without curly braces returns ${sumArrow2(3, 4, 20)}`); // c = 20