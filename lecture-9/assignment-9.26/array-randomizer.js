/* const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];
Create a program that every time you run it, prints out an array with differently
  randomized order of the array above.

Example:
node .\array_randomizer.js -> [5, 4, 18, 32, 8, 6, 2, 25, 14, 10] */

const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];
console.log(`Original array: ${array}`);

function arrayRandomizer(arr) {
  // Loop array items
  for (let i = 0; i < arr.length; i++) {
    // Select a slot between 0 ... length of the array
    let randomized = parseInt(Math.random() * (arr.length));
    // Switch places
    let temp = arr[i];
    arr[i] = arr[randomized];
    arr[randomized] = temp;
  }
  return arr;
}

console.log(`Randomized array: ${arrayRandomizer(array)}`);