/* Using the same array as previously:

	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us all animals that have the letter ‘o’ in their name.
Print the array with the found animals.

EXTRA: Find all animals that don’t have a ‘h’ or ‘o’ in their name! */

const animals = 	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];

let result = animals.filter(animal => animal.includes("o"));
console.log(`Animal names containing "o" are: ${result.toString()}.`);

// Extra
result = animals.filter(animal => !animal.includes("h") && !animal.includes("o"));
console.log(`Animal names not containing "h" or "o" are: ${result.toString()}.`);