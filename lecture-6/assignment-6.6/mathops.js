/* Create a program and assign three numbers to variables a, b and c 
(decide the value for these freely).

Calculate a + b * c
How does the result change if you add parentheses to the calculation
(a + b) * c
a + (b * c)
Print all the results using console.log */

const a = 3;
const b = 4;
const c = 5;

const d = a + b * c;
const e = (a + b) * c;
const f = a + (b * c);

console.log(d); // b and c multipiled, a added
console.log(e); // a and b added an then multiplied by c
console.log(f); // b and c multiplied, a added (same as first)


