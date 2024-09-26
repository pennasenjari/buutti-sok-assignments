/* EXTRA

Create the following array:

[ "cherry",  "banana", "coconut", "apple", "pear", "pineapple", "lemon","pumpkin" ];
Also create a second array that is empty.

Make the program go through the first array and add all fruits with more than 6
  characters in their name to the second array. Print the second array when done.
Use a for…of loop for the task. */

const fruits = [ "cherry",  "banana", "coconut", "apple", "pear", "pineapple", "lemon","pumpkin" ];
const fruits2 = [];

console.log(`Original array:`);
console.log(fruits);

for (let fruit of fruits) {
  if (fruit.length > 6) {
    fruits2.push(fruit);
  }
}

console.log(`\nModified array:`);
console.log(fruits2);
