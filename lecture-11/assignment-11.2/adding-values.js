/* After the previous assignment you have the fruits object

Add fruits "pear" (90), "kiwi" (40) and "orange" (100) to the fruits object
after the fruits object and the printWeight function has been declared.

After altering the fruits object, run the printWeight function again
  to make sure that the updated fruits object works as expected. */

const fruits = {"banana": 118, "apple": 85, "mango": 200, "lemon": 65};

function printWeight(fruit) {
  return fruit + " weighs " + fruits[fruit] + " grams.";
}

fruits.pear = 90;
fruits.kiwi = 40;
fruits.orange = 100;

console.log(`\n${printWeight("kiwi")}`);