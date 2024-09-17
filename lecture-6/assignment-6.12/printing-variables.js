/* Create a program with two variables: name (string) and age (number).
Assign some values for these variables.
a) Make the program print the two variables.
b) Make the program print the line <name> is <age> years old.
Tip: To concatenate strings with variables, you can use the plus ( + ) operator.
For example, console.log("Hello " + name). */

const name = "Donald";
const age = 99;

console.log(name); // name is deprecated? (ts6385)
console.log(age);
console.log(name + " is " + age + " years old.");