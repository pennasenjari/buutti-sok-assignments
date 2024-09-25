/* Create a program and assign two numbers to variables a and b 
(decide the value for these freely).

Calculate the sum, difference, fraction and product of these numbers.
Print all the results using console.log
Calculate and print the modulus of a and b, then the modulus of b and a. 
Why are the results different? */

const a = 5;
const b = 11;

const summa = a + b;
const erotus = a - b;
const tuotos = a * b;
const jakojaannos1 = a % b;
const jakojaannos2 = b % a;

console.log(summa);
console.log(erotus);
console.log(tuotos);
console.log(jakojaannos1); // modulus depends on the order of numbers
console.log(jakojaannos2);  