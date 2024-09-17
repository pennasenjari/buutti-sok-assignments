/*
a) What are the values of result1 and result2 in the program below? 
Explain why they are different. 
What is the type of number before it gets null assigned as its value?

let number;
const result1 = 10 + number;

number = null;
const result2 = 10 + number;

b) What are the values of c, d, and e in the program below?
Why are d and e different from each other?

Write the answer as a comment in your JS file.

Note: It is generally not a good idea to sum different data types
like this when it's not clear what the result is.

const a = true;
const b = false;

const c = a + b;
const d = 10 + a;
const e = 10 + b;
*/

console.log("Question a)")

// number is undefined before addition. 10 + undefined = undefined
let number;
const result1 = 10 + number; 
console.log(result1);

// number is null before addition. 10 + null = 10
number = null;
const result2 = 10 + number;
console.log(result2);

console.log("\nQuestion b)")
const a = true;
const b = false;
const c = a + b;
const d = 10 + a;
const e = 10 + b;

console.log(a); // true
console.log(b); // false
console.log(c); // 1
console.log(d); // 11
console.log(e); // 10

/* d and e are different because true is treated as value 1 and
   false is treated as value 0 */