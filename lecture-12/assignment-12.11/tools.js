import Rectangle from './Rectangle.js';
import Circle from './Circle.js';

function randomShape() {
  const shapeTypes = ["rectangle", "circle"];
  // randomize which type
  const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
  let shape = null;
  if (shapeType === "rectangle") {
    const width = Math.floor(Math.random() * 100) + 1; // 1 ... 100
    const height = Math.floor(Math.random() * 100) + 1;
    shape = new Rectangle(width, height);
  } else {
    // circle
    const radius = Math.floor(Math.random() * 100) + 1;
    shape = new Circle(radius);
  }
  return shape;
}

function randomShapes(n = 0) {
  const shapes = [];
  for (let i = 0; i < n; i++) {
    shapes.push(randomShape());
  }
  return shapes;
}

export { randomShape, randomShapes }