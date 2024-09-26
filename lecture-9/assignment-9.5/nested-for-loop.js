/* Using the for loop for each problem, print out the following number sequences:

1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
A1 A2 A3 B1 B2 B3 C1 C2 C3

Extra:
A1 A2 A3 B2 B3 B4 C3 C4 C5 */

//1 1 1 2 2 2 3 3 3 4 4 4
let output = "";
for(let i = 1; i <= 4; i++) {
  for(let j = 1; j < 4; j++) {
    output += i + " ";
  }
}
console.log(output);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
output = "";
for(let i = 0; i < 3; i++) {
  for(let j = 0; j <= 4; j++) {
    output += j + " ";
  }
}
console.log(output);

// A1 A2 A3 B1 B2 B3 C1 C2 C3
output = "";
const letters = ["A", "B", "C"];
for(let i = 0; i < 3; i++) {
  for(let j = 1; j < 4; j++) {
    output += letters[i] + j + " ";
  }
}
console.log(output);

// Extra
// A1 A2 A3 B2 B3 B4 C3 C4 C5
output = "";
let cumulative = 1;
for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    output += letters[i] + (j + cumulative) + " ";
  }
  cumulative++;
}
console.log(output);