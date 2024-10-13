/* EXTRA
Define a number n that is larger than 0, for example n = 3

Create a function that given parameter n finds the number of steps it takes to reach number 1
 (one) using the following process

If n is even, divide it by 2
If n is odd, multiply it by 3 and add 1
Example:

For n = 3 the process would be following 
0: n0 = 3 
1: 3 is odd, so we multiply by three and add one. n1 = n0 * 3 + 1 = 10 
2: 10 is even, so we divide by two. n2 = n1 / 2 = 5 
3: n3 = n2 * 3 + 1 = 16 
4: n4 = n3 / 2 = 8 
5: n5 = n4 / 2 = 4 
6: n6 = n5 / 2 = 2 
7: n7 = n6 / 2 = 1 So we reach n = 1 after seven steps.

You can read more about the Collatz conjecture from Wikipedia or XKCD.
https://en.wikipedia.org/wiki/Collatz_conjecture
https://xkcd.com/710/ */

function collazConjecture(n) {
  i = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n * 3) + 1;
    }
    console.log(`Round ${i}: ${n}`);
    i++;
  }
  return i;
}

n = 15;
console.log(`\nCalculating Collaz Conjecture. n = ${n}\n`);
console.log(`\nIt took ${collazConjecture(n)} rounds to reach 1.`);