/* Using the same array as previously:

	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us the first animal that ends in letter ‘t’.

EXTRA: Find the first animal that ends in letter ‘y’ and starts with letter ‘d’. */

const animals = [ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];

let result = animals.find(animal => {
  // Also: endsWith()
  return animal.substring(animal.length - 1) === "t";
});

console.log(`First animal name ending with "t" is ${result}`);

// Extra
result = animals.find(animal => {
  // Also: startsWith()
  return animal.substring(0, 1) === "d" && animal.substring(animal.length - 1) === "y";
});

console.log(`First animal name starting with "d" and ending with "y" is ${result}`);
