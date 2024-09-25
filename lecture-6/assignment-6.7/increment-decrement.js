/* Create a program and assign a number to variable i (decide the value freely).

a. Use increment operator to add to the number in variable i
b. print the results using console.log
c. Use decrement operator to decrease the number in variable i and print the result
Try out both the postfix and the prefix operators! */

let i = 7;
let x = 0;
console.log(`Original i: ${i}`);

x = ++i; // prefix
console.log(`++i: ${x}`);

i = 7;
x = i++; // postfix
console.log(`i++: ${x}`);

i = 7;
x = --i; // prefix
console.log(`--i: ${x}`);

i = 7;
x = i--; // postfix
console.log(`i--: ${x}`);
