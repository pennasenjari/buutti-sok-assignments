/* Create two variables: width and length.

Calculate and print out the area of a rectangle with these dimensions
Calculate and print out the area of a triangle of these dimensions

Extra: Using process.argv, read the width and length from the execution parameters.
Your program should be started with the parameters appended to the start command:
node areas.js 2 3 would print something like "Rectangle of width 2 and length 3
has area of 6". */

// Extra
const process = require('node:process');
const args = process.argv.slice(2);
const width = args[0]; // width
const length = args[1]; // length

function IsNumeric(val) {
  return Number(parseFloat(val)) == val;
}

console.log("Calculating square area and triangle area based on width and length.")

if (!IsNumeric(width) || !IsNumeric(length)) {
  console.error("Error. Give 2 plain numbers as parameters, representing width and length.");
  return;
}

const rectangle = width * length;
const triangle = width * length / 2;

console.log(`Width is ${width}, length is ${length}`);
console.log(`The rectangle area is ${rectangle}`);
console.log(`The triangle area is ${triangle}`);
