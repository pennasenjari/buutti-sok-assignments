/* Adding to your answer to the previous exercise,

Add a Square class. It should be derived from Rectangle and be otherwise identical,
  but because the sides of a square are all identical in length,
  its constructor should only take 1 parameter.
Call the base class constructor properly to create a square.

Create some Squares and call their getArea function to print their areas.

EXTRA: If you added the Ellipse class earlier, also add a Circle class,
  derived from Ellipse, and give it a constructor that only takes 1 parameter. */

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

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }

  // No need to redefine getArea
}

// Extra
class Circle extends Ellipse {
  constructor(width) {
    super(width, width);
  }

  getArea() {
    return Math.PI * (this.width / 2) ** 2;
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

const square = new Square(200);
console.log(`\nA new square object derived from Rectangle, width 200:`)
console.log(square);
console.log(`The square's area is ${parseInt(square.getArea())}.`);

// Extra
const circle = new Circle(200);
console.log(`\nA new circle object derived from Ellipse, diameter 200:`)
console.log(circle);
console.log(`The circle's area is ${parseInt(circle.getArea())}.`);
