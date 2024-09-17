/* The following program prints illogical results. Fix it so that it works properly.

const appleCount = 13;
const bananaCount = 5;

console.log("Apples: " + appleCount);
console.log("Bananas: " + bananaCount);
console.log("Fruits in total: " + appleCount + bananaCount); */

const appleCount = 13;
const bananaCount = 5;

console.log("Apples: " + appleCount);
console.log("Bananas: " + bananaCount);
// Use parentheses to coerse the types right
// Without parentheses 135, with them 18
console.log("Fruits in total: " + (appleCount + bananaCount));