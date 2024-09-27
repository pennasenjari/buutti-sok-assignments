/* You are holding a class that has students with ages of 20, 35, 27, 44, 24 and 32.

a) Create an array with the ages. Print the array.

b) Calculate and print the average age of the students.

Use a loop when calculating the sum of the ages.

Tip: we can get the length of the array with the length property, 
  and use it for the bounds of the loop. For example:

const numbers = [ 2, 4, 6 ];
console.log(numbers.length); // prints 3

// print all elements of the array
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
} */

const ages = [20, 35, 27, 44, 24, 32];
console.log(`The studends' ages are: ${ages.toString()}`);

let sum = 0;
for (let index = 0; index < ages.length; index++) {
  sum += ages[index];
}
const average = sum / ages.length;
console.log(`The average age is ${average.toFixed(1)} years.`);