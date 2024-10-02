/* We have the following number sequence: 0, 1, 1, 4, 7, 19, 40, 97, 117, ...

It can be presented as follows:

F(0) = 0
F(1) = 1
F(n) = (F(n - 2) * 3) + F(n - 1)

Create a function that calculates the value of F with any given n.

Calculate F(17) and print its value. If you got the implementation correct, 
your program should print 399331. */

// Need 2 first values to make the i - 2 in for loop work
const sequence = [0, 1];

function myFibo(n) {
  // Fill the sequence array until reach n
  for (let i = 2; i <= n; i++) {
     sequence[i] = (sequence[i - 2] * 3) + sequence[i - 1];
  }
  // Return the last value in sequence array
  return sequence[(sequence.length - 1)];
}

console.log(`\nF calculated with for loop: ${myFibo(17)}`); // 399331

const sequence2 = [];
let index = 0;
let maxIndex = 0;

function myFiboRecursive(maxRecursion = 0) {

  if (maxIndex === 0) {
    // set maximum recursion at first round
    maxIndex = maxRecursion + 1; // + 1 because index++ before recursive call
  }

  // calculate F and fill into sequence array
  if (index <= 1)  {
    // 0 and 1 set "manually" because need 2 elements for calculation
    sequence2.push(index);
  } else {
    const fibo = sequence2[(index - 2)] * 3 + sequence2[(index - 1)];
    sequence2.push(fibo);
  }

  index++;
  // Recurse function until reach maxIndex
  if (index < maxIndex) {
    myFiboRecursive();     
  }

  // Return the last value in sequence array
  return sequence2[(sequence2.length - 1)];
}

console.log(`F calculated with recursive function: ${myFiboRecursive(17)}`); // 399331