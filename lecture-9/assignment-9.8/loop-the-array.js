/* Create the following array:

["banana", "apple", "pear", "pineapple", "lemon"];
Create a loop where you go through items in the array and print all of them.

Extra: Print only the fruits that have more than 5 letters in their name. */

const fruits = ["banana", "apple", "pear", "pineapple", "lemon"];

let output = "";
console.log(`Original fruit names:`)
for(i = 0; i < fruits.length; i++) {
  output += fruits[i] + " ";
}
console.log(output + "\n");

output = "";
console.log(`Fruit names longer than 5 letters:`)
for(i = 0; i < fruits.length; i++) {
  if (fruits[i].length > 5) {
    output += fruits[i] + " ";
  }
}
console.log(output);
