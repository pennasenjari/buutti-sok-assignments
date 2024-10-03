/* Create a new Rectangle class with properties width and height.

The class constructor should take values for these properties 
  as parameters and assign them.

Create a few new rectangles and print them. */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect1 = new Rectangle(100, 200);
console.log(rect1);

const rect2 = new Rectangle(300, 400);
console.log(rect2);
