/* 
a) Create a class named Animal that takes two numbers in its constructor: 
weight and cuteness. Assign the values of the parameters to similarly-named properties
in the Animal object instance (this).

Add a parameterless function named makeSound to the class that simply prints "silence".

Create some animals and print them to make sure your code works.

  const animal = new Animal(6.5, 4.0);
  animal.makeSound();  // prints "silence"
  console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"

  b) Create a class Cat that is derived from Animal (iow. Cat extends Animal).

Its constructor should accept and forward both the weight and cuteness parameters to the 
base class (super class) constructor.

Override the makeSound function in the implementation of the Cat class to print "meow" 
instead of "silence".

Create a new Cat instance, call its makeSound function, and print the cat to make sure 
your code works.

const cat = new Cat(4.5, 3.0);
cat.makeSound();  // prints "meow"
console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"

c) Create a class Dog that is derived from Animal. Its constructor should

- accept and forward both the weight and cuteness parameters to the base class 
  (super class) constructor
- have a new breed parameter that is assigned to the object instance as a similarly-named 
  property. Also, override the makeSound function. If the dog's cuteness is over 4, the function
  should print "awoo", otherwise the function should print "bark".

Create two dogs, one with cuteness 4 or blow, and another with cuteness above 4. Call the
makeSound functions of the dogs to make sure your code works.

const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark" */

class Animal {
  constructor(weight, cuteness) {
    this.weight = weight;
    this.cuteness = cuteness;
  }

  makeSound() {
    console.log(`silence`);
  } 
}

class Cat extends Animal {
  constructor(weight, cuteness) {
    super(weight, cuteness);
  }

  makeSound() {
    console.log(`meow`);
  } 
}

class Dog extends Animal {
  constructor(weight, cuteness, breed) {
    super(weight, cuteness);
    this.breed = breed;
  }

  makeSound() {
    if (this.cuteness > 4) {
      console.log(`awoo`);
    } else {
      console.log(`bark`);
    }
  } 
}

// a)
const animal = new Animal(6.5, 4.0);
animal.makeSound();  // prints "silence"
console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"

// b)
const cat = new Cat(4.5, 3.0);
cat.makeSound();  // prints "meow"
console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"

// c)
const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark"