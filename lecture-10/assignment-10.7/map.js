/* Using the same array as previously:

	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Using map,
create a new array that contains the lengths of the animals’ names
create a new array that contains booleans that tell whether the specific animals
  have the letter ‘o’ as their second letter

Print the original array as well as both arrays created with map. */

const animals = 	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];
console.log(`Original array: ${animals.toString()}`);

const nameLengths = animals.map(animal => animal.length);
console.log(`Name lengths: ${nameLengths.toString()}`);

let namesWithO = animals.map(animal => animal.substring(1,2) === "o");
console.log(`Do names have second letter as "o"?: ${namesWithO.toString()}`);

// My extra
namesWithO = [];
animals.map(animal => animal.substring(1,2) === "o" ? namesWithO.push(animal) : null);
console.log(`Names having second letter as "o": ${namesWithO.toString()}`);