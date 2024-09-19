/* Create a program with two variables, each representing words.
Using a conditional, check which word is longer.
If the first word is longer, the program should print
"first word is longer than second word", with the placeholders replaced
by the actual words.
Likewise, if the second word is longer, then the program should say that it's longer.
Test your program with different words to make sure it works.
HINT: Use can check the length property of a string-type variable to check
the length of a string. For example:
const fruit = "lemon";
console.log(fruit.length); // prints 5 */

const string1 = "Hello Mighty World";
const string2 = "Big World";

if (string1.length > string2.length) {
  console.log(`"${string1}" is longer than "${string2}"`);
} else if (string1.length < string2.length) {
  console.log(`"${string2}" is longer than "${string1}"`);
} else {
  console.log(`"${string1}" is as long as "${string2}"`);
}
