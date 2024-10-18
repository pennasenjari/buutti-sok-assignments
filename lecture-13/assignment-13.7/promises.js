/* 
a) Create a function sum that takes one parameter (limit). The function sums numbers
 from 0 to the specified limit, and returns the total sum.

console.log(sum(10)); // prints 55 (= 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

b) As an exercise, create a Promise where you calculate and return the result of sum(50000).
Resolve the promise and console.log the result.

c) We want a mechanism for delaying the sum calculations.
Create a Promise where you use setTimeout to calculate and return the result of sum(50000),
 but with a delay of 2 seconds.

Resolve the promise and console.log the result.

d) Create a function createDelayedCalculation with two parameters: limit and milliseconds.
The function should create and return a Promise similar to c), expect that instead of 50000
 and a fixed delay of 2 seconds, the limit and delay are configurable.
Make sure the following code works:

// Prints 199999990000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then(result => console.log(result));

// Prints 1249975000 after a delay of 0.5 seconds
createDelayedCalculation(50000, 500).then(result => console.log(result));

e) Why, when running the above code, is the result of sum(50000) printed before sum(20000000),
 despite that the promise for the latter is created above the former?
Add a comment explaining this. If you're unsure, check how asynchronous functions and
 callbacks work. */

// a) sum numbers
 function sum(limit) {
  let total = 0;
  for (i = 1; i <= limit; i++) {
    total += i;
  }
  return total;
}
console.log(`\nCumulative sum of 1 to 10: ${sum(10)}`);

// b) a promise
new Promise((resolve, reject) => {
  resolve(sum(50000));
}).then((total) => {
  console.log(`Cumulative sum of 1 to 50000 with Promise: ${total}`);
});

// c)
new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(sum(50000))
  },2000);
}).then((total) => {
  console.log(`Cumulative sum of 1 to 50000 with Promise and timeout of 2 seconds: ${total}`);
});

// d)
async function createDelayedCalculation(limit, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(`Cumulative sum of 1 to ${limit} with Promise and timeout of ${(ms/1000)} s: ${sum(limit)}`);
    },ms);
  })
}
// Prints 199999990000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then(result => console.log(result));
// Prints 1249975000 after a delay of 0.5 seconds
createDelayedCalculation(50000, 500).then(result => console.log(result));

// e)
/* The result of sum(50000) is printed before sum(20000000), because it has smaller delay.
   Async functions are executed simultaneously and which ever is ready first, prints first. */