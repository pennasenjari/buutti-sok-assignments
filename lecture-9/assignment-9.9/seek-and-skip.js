/* EXTRA
Create the following array of numbers:

[4, 7, 11, 5, 6, 9, 15, 7]
Go through the array in a loop and delete all numbers that are less than 7.

Print the array afterwards to make sure it worked.

You can use either a for or while loop for the task. */

const numbers = [4, 7, 11, 5, 6, 9, 15, 7];

console.log(`Original array:`);
console.log(numbers);

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < 7) {
    numbers.splice(i, 1);
  }
}

console.log(`Modified array:`);
console.log(numbers);
