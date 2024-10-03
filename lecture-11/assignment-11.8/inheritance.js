/* Modify your answer to the previous exercise so that instead of a Rectangle class,
  there’s a Shape class, with the width and height properties. Then,

Add a getArea method to the Shape class, which returns 0.
Add a Rectangle class that is derived from the Shape class. 
  The class must have a getArea method that returns the area of the rectangle.
Add a Triangle class that is derived from the Shape class and also has a 
  getArea method that returns the area of the triangle. 

Create some shapes of each type and call their getArea functions to make sure
  that your code works.

EXTRA: Create a class for Ellipse. The area of ellipse is pi * width / 2 * height / 2 */


class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return 0;
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return this.width * this.height / 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return this.width * this.height;
  }
}

// Extra
class Ellipse extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return Math.PI * this.width / 2 * this.height / 2;
  }
}

const rectangle = new Rectangle(100, 200);
console.log(`\nA new rectangle object, 100 x 200:`)
console.log(rectangle);
console.log(`The rectangle's area is ${rectangle.getArea()}.`);

const triangle = new Triangle(100, 200);
console.log(`\nA new triangle object, 100 x 200:`)
console.log(triangle);
console.log(`The triangle's area is ${triangle.getArea()}.`);

// Extra
const ellipse = new Ellipse(100, 200);
console.log(`\nA new ellipse object, 100 x 200:`)
console.log(triangle);
console.log(`The ellipse's area is ${parseInt(ellipse.getArea())}.`);