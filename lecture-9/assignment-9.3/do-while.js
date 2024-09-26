/* Make a copy of your previous assignment answer.

Modify the implementation to work as a do-while loop instead of a while loop.
Test to make sure your program works.

Modify the condition so it’s always false and test it again. */

// 3, 6, 9, 12, 15, 18, 21
function sequence1(n) {
  let output = "";
  let i = 3;
  do {
    output += i + " ";
    i += 3;
  } while(i <= n);
  return output;
}

// Extra
// 3, 6, 9, 12, 16, 20, 24, 28
function sequence2(n) {
  let output = "";
  let i = 3;
  do {
    output += i + " ";
    if (i < 12) {
      i += 3;
    } else {
      i += 4;
    }
  } while(i <= n);
  return output;
}

// Extra
// 3, 6, 9, 13, 17, 21, 26, 31, 36
function sequence3(n) {
  let output = "";
  let i = 3;
  do {
    output += i + " ";
    if (i < 9) {
      i += 3;
    } else if (i < 21) {
      i += 4;
    } else {
      i += 5;
    }
  } while(i <= n);
  return output;
}

console.log(sequence1(21) + "\n");
console.log(sequence2(28) + "\n");
console.log(sequence3(36) + "\n");