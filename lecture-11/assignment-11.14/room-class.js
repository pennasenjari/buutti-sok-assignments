/* a) Create a class Room with properties width and height. 
Accept values for the properties as arguments in the constructor and assign them.
Create an instance of your Room class and print it.

const room = new Room(4.5, 6.0);
console.log(room); // Room { width: 4.5, height: 6 }

b) Create a function getArea in your Room class that calculates and returns the area
   of the room. We assume that the room is rectangular in shape, so the formula is
   just width * height. Don't forget to use the this keyword!
Call the function for your room and print the result to make sure it works correctly.

    const room = new Room(4.5, 6.0);
    const area = room.getArea();
    console.log(area); // prints 27

c) We want to be able to add furniture to the room.

In the Room class constructor, initialize a new property furniture as an empty array.
Then create a addFurniture method (function) to your class that takes in a string. 
It simply adds the given string to the furniture list.

Call the addFurniture function with some values and print your room afterwards 
to make sure the function works.

const room = new Room(4.5, 6.0);
room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
// prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
console.log(room); */

// a)
class Room {
  constructor(width, height) {
      this.width = width;
      this.height = height;
      // c)
      this.furniture = [];
  }

  // b)
  getArea() {
    return this.width * this.height;
  }

  addFurniture(furniture) {
    this.furniture.push(furniture);
  }
}

const room = new Room(4.5, 6.0);
console.log(room); // Room { width: 4.5, height: 6 }

// b)
const area = room.getArea();
console.log(area); // prints 27

// c)
room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
// prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
console.log(room);