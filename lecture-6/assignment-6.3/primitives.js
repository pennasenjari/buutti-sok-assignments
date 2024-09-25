/* Define different variables for the following types: 
string, number, boolean, null and undefined and give them values.
Check how these values are printed to the console.log
Print types of all the variables to console.log using typeof
What is the type of a variable that has no assigned value?

EXTRA: Also do the 1 and 2 parts for BigInt and Symbol types. */

const stringi = "Hei vaan";
const numberi = 33;
const booleani = true;
const nulli = null;
const undefinedi = undefined;
let undefinedi2; // const undefinedi2 -> error

console.log(typeof(stringi));
console.log(typeof(numberi));
console.log(typeof(booleani));
console.log(typeof(nulli));
console.log(typeof(undefinedi));
console.log(typeof(undefinedi2)); // undefined

// Extra
const isoIntti = 123445678n;
const symboli = Symbol("xyz");
console.log(typeof(isoIntti));
console.log(typeof(symboli));