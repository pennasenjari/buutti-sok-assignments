/* Using the for loop for each problem, print out the following number sequences:

0 100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0

Extra:
1 2 4 7 11 16 22 29 37 46
1 2 4 1 5 10 4 11 19 10 */

// 0 100 200 300 400 500 600 700 800 900 1000
let output = "";
for(let i = 0; i <= 1000; i += 100) {
  output += `${i} `;
}
console.log(`${output}\n`);

output = "";
// 1 2 4 8 16 32 64 128
for(let i = 1; i <= 128; i += i) {
  output += `${i} `;
}
console.log(`${output}\n`);

// 3 6 9 12 15
output = "";
for(let i = 3; i <= 15; i += 3) {
  output += `${i} `;
}
console.log(`${output}\n`);

// 9 8 7 6 5 4 3 2 1 0
output = "";
for(let i=9; i >= 0; i--) {
  output += `${i} `;
}
console.log(`${output}\n`);

// Extra 1
// 1 2 4 7 11 16 22 29 37 46
output = "";
let cumulative = 0;
let sum = 1; // 1st number
for(let i = 0; i < 10; i++) {
  output += `${(sum)} `;
  cumulative++;
  sum = sum + cumulative;
}
console.log(`${output}\n`);

// Extra 2
// 1 2 4 1 5 10 4 11 19 10 
// Solved by Miikka Siitonen
output = "";
n = 1;
for (let i = 0; i <= 9; i++) {
    if (i % 3 === 0) {  // If divisible by three reduce the "index"
        n = n - i;
    } else {
        n = n + i;
    }
    output += `${n} `;
}
console.log(output);