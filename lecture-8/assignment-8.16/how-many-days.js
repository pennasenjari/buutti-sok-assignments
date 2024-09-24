/* Create a program that has a variable representing the number of a month. 
(1 = January, 2 = February and so on)

The program should print how many days there are in the given month.
Do it using an array and indexing.

You might recall when we did this using if and switch-case on an earlier week.
This array solution is quite a bit simpler, right? */

const months = [
  ["January", 31],
  ["February", "28 or 29"],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December",31]
];

const monthNumber = 2;
const i = monthNumber - 1;

console.log(`${months[i][0]} has ${months[i][1]} days.`)