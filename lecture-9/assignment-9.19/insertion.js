/* Create a function insertNumber that can insert a number into the right slot
  in a sorted array of numbers.

For example:

const array = [ 1, 3, 4, 7, 11 ];

insertNumber(array, 8);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11 ] 

insertNumber(array, 90);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11, 90 ] */

const arr = [ 1, 3, 4, 7, 11 ];

function insertNumber(nbr) {
  arr.push(nbr);
  //return arr.sort(); // This sorts wrong: 1,11,3,4,5,7
  return arr.sort(function(a, b) {
    return a - b;
  });
}

console.log(`Original array: ${arr.toString()}`);
let add = 5;
console.log(`Added ${add} to array: ${insertNumber(add).toString()}`);
add = -1;
console.log(`Added ${add} to array: ${insertNumber(add).toString()}`);
add = 22;
console.log(`Added ${add} to array: ${insertNumber(add).toString()}`);
