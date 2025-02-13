/* a) Create a function incrementAll that takes an array of numbers 
  as a parameter and returns a new array where all of the array's elements
  have been incremented by one.

Think of a fitting array method to use for this task.

const numbers = [ 4, 7, 1, 8, 5 ];
const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]
b) Create a function decrementAll that takes an array of numbers as a parameter
  and returns a new array where all of the array's elements have been decremented by one.

const numbers = [ 4, 7, 1, 8, 5 ];
const newNumbers = decrementAll(numbers);
console.log(newNumbers); // prints [ 3, 6, 0, 7, 4 ] */

const numbers = [ 4, 7, 1, 8, 5 ];

function incrementAll(numbers) {
  return numbers.map(number => number += 1);
}

function decrementAll(numbers) {
  return numbers.map(number => number -= 1);
}

const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]

const newNumbers2 = decrementAll(numbers);
console.log(newNumbers2); // prints [ 3, 6, 0, 7, 4 ]