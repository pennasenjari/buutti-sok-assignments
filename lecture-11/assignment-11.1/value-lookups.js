/* Create an object that contains fruits as keys and their average weights 
  (in grams) as values.

banana: 118, apple: 85, mango: 200, lemon: 65

Then create a function printWeight(fruit) that prints the weight of the given
  fruit. For example, printWeight(“banana”) would print “banana weighs 118 grams”.

EXTRA: If the given fruit doesn’t exist, make the function print a list of 
  supported fruits. */

const fruits = {"banana": 118, "apple": 85, "mango": 200, "lemon": 65};

function capitalizeFirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function printWeight(fruit) {
  return `${capitalizeFirst(fruit)} weighs ${fruits[fruit]} grams.`;
}

console.log(`\n${printWeight("banana")}`);

// Extra
function printWeight2(fruit) {
  if (fruit in fruits) {
    return `${capitalizeFirst(fruit)} weighs ${fruits[fruit]} grams.`;
  } else {
    return `${capitalizeFirst(fruit)} is not available. Available are ${Object.keys(fruits)}.`;
  }
}

console.log(printWeight2("durian"));
