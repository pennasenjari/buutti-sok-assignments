/* Modifying the code of your answer to the previous assignment, add a function 
  getArea to your Rectangle class.

This function must calculate and return the area of the rectangle using the values
  of the width and height properties.

Call your function and make sure it returns correct values. */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(100, 200);
console.log(`\nA new rectangle object:`)
console.log(rect1);
console.log(`\nThe rectangle's area is ${rect1.getArea()}.`);
