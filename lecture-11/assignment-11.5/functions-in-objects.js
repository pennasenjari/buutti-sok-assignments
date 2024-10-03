/* Create a new object, representing a fictional processor in a supercomputer, 
  like the following:

const computer = {
  name: "Buutti SuperCalculator 6000",
  cache: "96 GB",
  clockSpeed: 9001.0,
};

Then create two methods inside the object:
a function named overclock that increases the clockSpeed by 500
a function named savePower that cuts the clockSpeed to 2000 if it’s greater than that.
If the clock speed is already 2000 or lower, the function should instead reduce 
  the clock speed by half.

Test your functions by calling them and printing your object to make sure they work. */

const computer = {
  name: "Buutti SuperCalculator 6000",
  cache: "96 GB",
  clockSpeed: 9001.0,
};

computer.overclock = function () {
  this.clockSpeed += 500;
}

computer.savePower = function () {
  if (this.clockSpeed > 2000) {
    this.clockSpeed = 2000;
  } else {
    this.clockSpeed /= 2;
  }
}

console.log("\nComputer:");
console.log(computer);

console.log("\nOverclocked computer:");
computer.overclock();
console.log(computer);

console.log("\nComputer in 1st power saving mode:");
computer.savePower();
console.log(computer);

console.log("\nComputer in 2nd power saving mode:");
computer.savePower();
console.log(computer);