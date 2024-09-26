/* Using a while loop, write a function that prints "Hello loop!" n times, 
  where n is given as the function parameter.
Modify your function so that instead of "Hello loop!" it prints numbers from 1 to n.
Modify your function so that instead of printing numbers from 1 to n it prints 
  the factorial of n. Factorial is the product of all the integers from 1 to n,
  so if n = 4, the factorial of n would be 24 ( = 1 * 2 * 3 * 4) */

// Print a text n times  
function hello(n) {
  let output = "";
  let i = 0;
  while(i < n) {
    output += "Hello loop!\n";
    i++;
  }
  return output;
}

// Print numbers 1 to n
function oneToN(n) {
  let output = "";
  let i = 1;
  while(i <= n) {
    output += i + " ";
    i++;
  }
  return output;
}

// Print factorial of n
function factorial(n) {
  let output = "";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    output += result + " ";
  }
  return output;
}

console.log(hello(5));
console.log(oneToN(5) + "\n");
console.log(factorial(5));