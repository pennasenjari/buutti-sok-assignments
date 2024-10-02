/* We have the following number sequence: 0, 1, 1, 4, 7, 19, 40, 97, 117, ...

It can be presented as follows:

F(0) = 0
F(1) = 1
F(n) = (F(n - 2) * 3) + F(n - 1)

Create a function that calculates the value of F with any given n.

Calculate F(17) and print its value. If you got the implementation correct, 
your program should print 399331. */

// Need 2 first values to make the i - 2 in for loop work
let sequence = [0, 1];

function myF(n) {
  // Fill the sequence array until reach n
  for (let i = 2; i <= n; i++) {
     sequence[i] = (sequence[i - 2] * 3) + sequence[i - 1];
  }
  // Return the last value in sequence array
  return sequence[(sequence.length - 1)];
}

console.log(myF(17)); // 399331
