/*
We are evaluating two computer systems on which we perform an identical set of work.
Computer #1 does the job in 42 minutes with an average energy consumption of 600 watts.
Computer #2 does the job in 57 minutes and uses an average of 480 watts
  during the process.
Programmatically calculate which computer used less power for the job.
  Total power used is determined by average power consumption multiplied
  by the time it took for the job to finish.
Using a ternary operator, print the number of the computer which used less electricity.
Extra: Use a ternary operator in the parameter that you give to console.log. */

const comp1Time = 42; // min
const comp1Power = 600; // watts
const comp2Time = 57;
const comp2Power = 480;

let comp1Total = comp1Time * comp1Power;
let comp2Total = comp2Time * comp2Power;

console.log(`Computer 1 used ${comp1Total} units of power.`);
console.log(`Computer 2 used ${comp2Total} units of power.\n`);

if (comp1Total === comp2Total) {
  console.log(`The computers used equal amount of power.`)
} else if (comp1Total < comp2Total) {
  console.log(`Computer 1 used less.`)
} else {
  console.log(`Computer 2 used less. `);
}

// Extra
console.log(`\nExtra:`)
console.log(comp1Total === comp2Total ? 'The computers used equal amount of power.'
: comp1Total < comp2Total ? `Computer 1 used less.` : `Computer 2 used less.`);
