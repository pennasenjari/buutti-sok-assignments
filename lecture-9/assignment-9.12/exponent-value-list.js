/* a)
Create a function named exponentValueList that takes a number n as a parameter.

The number should print 2 multiplied by itself from 1... to n times, each value on
  its own line.

For example, n = 4 should result in

2
4
8
16
If n is zero or negative, the function should just print n needs to 
  be positive and return.

b)
Add a parameter to exponentValueList so that instead of the number to raise
  in power always being 2, it can also be defined by the caller. */

// a)
function exponentValueList(n) {
  let output = "";
  if (n <= 0) {
    console.log("Value needs to be positive.");
    return;
  }
  for (i = 1; i <= n; i++) {
    output += (2 ** i) + " ";
  }
  console.log(output);
}

exponentValueList(4);

// b) 
function exponentValueList2(b, p) { // b = base, p = power
  let output = "";
  if (b <= 0 || p <= 0) {
    console.log("Values need to be positive.");
    return;
  }
  for (i = 1; i <= p; i++) {
    output += (b ** i) + " ";
  }
  return output;
}

console.log(exponentValueList2(2, 6));