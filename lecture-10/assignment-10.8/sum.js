/* EXTRA

Create an array full of numbers. Now, calculate the sum of all numbers.

a) Use the whatever method comes into your mind…
b) Use reduce!
Extra: Add NaN values into the array. How to take them into account in summing? */

const arr = [5, 13, 2, 10, 8];
console.log(`\nArray with numbers only: ${arr.toString()}`);

let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum += arr[i];
  }
}
console.log(`Sum of numbers with for loop: ${sum}`);

sum = arr.reduce((accumulator, current) => accumulator + current)
console.log(`Sum of numbers with reduce: ${sum}`);

// Extra: include NaN values
const arr2 = [5, 13, 2, "x", 10, 8];
console.log(`\nArray containing numbers and non-numbers: ${arr2.toString()}`);

sum = 0;
for (i = 0; i < arr2.length; i++) {
  // Exclude NaN values with typeof()
  if (typeof arr2[i] === "number") {
    sum += arr2[i];
  }
}
console.log(`Sum of numbers with for loop, excluding non-numbers: ${sum}`);

sum = arr2.reduce((accumulator, current) => {
  return typeof current === "number" ? (accumulator + current) : 0;
})
console.log(`Sum of numbers with reduce, excluding non-numbers: ${sum}`);
