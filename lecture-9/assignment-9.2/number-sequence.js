/* Using a while loop, make a program that prints out the following
  number sequence (it's ok to print each number on a new line):

3, 6, 9, 12, 15, 18, 21

Extra: Make a program that prints the following sequence
3, 6, 9, 12, 16, 20, 24, 28

Extra: How about this one:
3, 6, 9, 13, 17, 21, 26, 31, 36 */

// 3, 6, 9, 12, 15, 18, 21
function sequence1(n) {
  let output = "";
  let i = 3;
  while(i <= n) {
    output += i + " ";
    i += 3;
  }
  return output;
}

// Extra
// 3, 6, 9, 12, 16, 20, 24, 28
function sequence2(n) {
  let output = "";
  let i = 3;
  while(i <= n) {
    output += i + " ";
    if (i < 12) {
      i += 3;
    } else {
      i += 4;
    }
  }
  return output;
}

// Extra
// 3, 6, 9, 13, 17, 21, 26, 31, 36
function sequence3(n) {
  let output = "";
  let i = 3;
  while(i <= n) {
    output += i + " ";
    if (i < 9) {
      i += 3;
    } else if (i < 21) {
      i += 4;
    } else {
      i += 5;
    }
  }
  return output;
}

console.log(sequence1(21) + "\n");
console.log(sequence2(28) + "\n");
console.log(sequence3(36) + "\n");