/* Create a function findLargest that finds and returns the largest number 
  in a given array of numbers.

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const largest = findLargest(array);
console.log(largest); // prints 22 */

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];

function findLargest(arr) {
  let largest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const largest = findLargest(array);
console.log(largest); // prints 22 */