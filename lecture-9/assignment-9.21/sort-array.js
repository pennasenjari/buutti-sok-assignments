/* Write a function sortNumberArray that takes an array as a parameter and sorts the array.

To accomplish this, you'll need to think of an algorithm for sorting an array.

Use loops, indexing and the methods learned on the lecture to sort the array.

Do not use Array.sort. While in real productivity code you'd usually use Array.sort,
  it is still important for you to know how it works under the hood, and one 
  of the best ways to learn that is implementing it yourself.

For example:

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ] */

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
console.log(`Original array: [${array}]`); 

function sortNumberArray(arr) {
  let temp;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }  
  return arr;
}

// prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
console.log(`Sorted array: [${sortNumberArray(array)}]`);