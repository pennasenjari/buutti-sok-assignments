/* Create a new NPM project. Create two files, Rectangle.js and Circle.js. 
These files should have a single class in each, named respectively, and that class
 should be the default export of the file. The Rectangle class should have width and 
 height properties, and the Circle class should have radius property. 
Neither class has any methods.

Then create a file tools.js and import the Rectangle and Circle classes there. 
Create two functions, randomShape() and randomShapes(). The first returns randomly either
 a Rectangle or Circle of random dimensions. The latter returns a list of n random shapes. 
 Export both functions as named exports.

In your index.js import both methods. Use them to create some shapes, and log them
 to the console.  */

import  { randomShape, randomShapes } from './tools.js';

console.log("");
console.log(randomShape());
console.log(randomShape());
console.log(randomShape());
console.log("");
console.log(randomShapes(3));