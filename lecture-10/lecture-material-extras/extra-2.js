/* We have an array:

[
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "Chicago" },
  { name: "David", age: 40, city: "Houston" },
  { name: "Eve", age: 45, city: "Phoenix" }
]
Create a new array that contains just the names of the people in uppercase.
Create a new array that contains a string for each person in the format 
  "Name is X years old and lives in City", where Name, X, and City are placeholders 
  for the actual values. */

const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "Chicago" },
  { name: "David", age: 40, city: "Houston" },
  { name: "Eve", age: 45, city: "Phoenix" }
];

console.log("\nPeople:");
console.log(people);

const names = people.map(person => person.name.toUpperCase());
console.log("\nUppercase names:");
console.log(names);

const people2 = people.map(person => {
  return `${person.name} is ${person.age} years old and lives in ${person.city}.`;
})

console.log("\nFormatted people:");
for (person of people2) {
  console.log(person);
}
