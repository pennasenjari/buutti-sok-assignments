/* Using a loop of your choosing and the continue statement, 
  create a program that calculates the factorial of 10, 
  but skips every number that is divisible by 3. */

// Print factorial of n
function factorial(n) {
  let output = "";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    if (i % 3 === 0) {
      continue;
    }
    output += result + " ";
  }
  return output;
}

console.log(factorial(10));