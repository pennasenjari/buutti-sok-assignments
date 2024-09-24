/* const arr = ['banaani', 'omena', 'mandariini', 'appelsiini', 'kurkku', 'tomaatti', 'peruna']
Print the 3rd and 5th items of the array and the array’s length
Then sort the array in alphabetical order and print the entire array
Finally, add the item “sipuli” to the array, and print out again
Extra::

Remove the first item in the array, and print out again. HINT: shift()
Print out every item in this array using .forEach()
Print out every item that contains the letter "r". HINT: includes() */

const arr = ['banaani', 'omena', 'mandariini', 'appelsiini', 'kurkku', 'tomaatti', 'peruna'];

console.log("Original array:");
console.log(arr);

console.log("\nPrint items 3 and 5: ");
console.log(arr[2], arr[4])
console.log("Array length is ", arr.length);

console.log("\nSort alphabetically & print:");
console.log(arr.sort())

console.log("\nAdd item \"sipuli\" & print:");
arr.push("sipuli");
console.log(arr);
//console.log(arr.push("nauris")) // Prints 9 (size of arr)

console.log("\nRemove 1st item:");
console.log(arr.slice(1));
// Does not remove
// arr.slice(1);
// console.log(arr);

console.log("\nPrint all with forEach:");
arr.forEach((item) => {
  console.log(item);
})

console.log("\nPrint all words inlcuding \"r\":");
arr.forEach((item) => {
  if (item.includes("r")) {
    console.log(item);
  }
})
