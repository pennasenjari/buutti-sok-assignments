/* With the help of forEach, calculate

a) the product of the numbers 5, 13, 2, 10, 8
b) the average of the numbers 5, 13, 2, 10, 8 */

const arr = [5, 13, 2, 10, 8];

let product = 1;
arr.forEach(nbr => product *= nbr);
console.log(`The product of ${arr.toString()} is ${product}`);

let sum = 0;
arr.forEach(nbr => sum += nbr);
const ave = sum / arr.length;
console.log(`The average of ${arr.toString()} is ${ave.toFixed(1)}`);