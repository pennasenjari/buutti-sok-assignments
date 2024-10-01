/* Using the same array as previously:

	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us the index of the first animal that has 
  6 or more letters in its name and prints the index.

Based on the found index, print the value as well. */

const animals = 	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];

const result = animals.findIndex(animal => animal.length >= 6);

console.log(`First index containing animal name at least 6 chars long is ${result}.`);
console.log(`The animal is ${animals[result]}.`);
