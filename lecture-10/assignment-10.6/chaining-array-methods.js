/* Building on your solution for the first part of the previous exercise, 
modify it so that instead of printing the whole array at once, 
you print the animals separately on their own lines. */

const animals = 	[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ];

console.log(`Animal names containing "o" are:`);
animals.filter(animal => animal.includes("o")).forEach(
  filteredAnimal =>  console.log(filteredAnimal));