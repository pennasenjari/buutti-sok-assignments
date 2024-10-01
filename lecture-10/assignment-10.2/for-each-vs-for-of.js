/* We have the following array:

[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]
Create a program that prints the names of all animals that have the letter 'e'
  in their name.

a) implement the program using a for…of loop
b) implement the program using the forEach method */

const animals = [ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];

let animales = [];
for (let animal of animals) {
  if (animal.includes('e')) {
    animales.push(animal);
  }
}
console.log(`Animal names containing "e" (for of loop): ${animales.toString()}`);

animales = [];
animals.forEach(animal => { 
  if (animal.includes('e')) {
    animales.push(animal);
  }
})

console.log(`Animal names containing "e" (forEach loop): ${animales.toString()}`);
