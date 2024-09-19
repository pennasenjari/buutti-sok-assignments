/* Create two variables: width and length.

Calculate and print out the area of a rectangle with these dimensions
Calculate and print out the area of a triangle of these dimensions

Extra: Using process.argv, read the width and length from the execution parameters.
Your program should be started with the parameters appended to the start command:
node areas.js 2 3 would print something like "Rectangle of width 2 and length 3
has area of 6". 

(Extra in separate file)
*/

const width = 10;
const lenght = 20;
const rectangle = width * lenght;
const triangle = width * lenght / 2;

console.log(`The rectangle area is ${rectangle}`);
console.log(`The triangle area is ${triangle}`);
