/* Take the end state of our previous exercises:

[ "pangram:", "the",  "quick", "gray", "fox", "jumps", "over", "the", "lazy", "dog" ]
Using the shift as well as splice and/or pop methods, remove the first element and
  the last 5 elements of the array.

Also remove the element "gray".

The end result should be

[ "the",  "quick", "fox", ] 
Print your array. */

const arr = [ "pangram:", "the",  "quick", "gray", "fox", "jumps", "over", 
"the", "lazy", "dog" ];

console.log("Original array:");
console.log(arr);

arr.shift();
console.log("First item removed:");
console.log(arr);

arr.splice(4);
console.log("Last 5 items removed:");
console.log(arr);

arr.splice(2,1);
console.log("\"gray\" removed:");
console.log(arr);
