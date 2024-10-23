/* EXTRA

We can also put functions into arrays.

Create a program where we have variables x and y coordinates representing the position of
  a robot, and a command string that tells the robot where it should move.

The robot has the following command string:

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
Go through this command string and convert it into an array of numbers, so that:

N is turned to 0
E is turned to 1
S is turned to 2
W is turned to 3
C is turned to 4
B is turned to 5
Then create an array of functions where:

element 0 is a function that increments Y
element 1 is a function that increments X
element 2 is a function that decrements Y
element 3 is a function that decrements X
element 4 is a function that does nothing
The number 5 is a special case: if found, the remaining commands are skipped.
It doesn't need to exist in the function array.

Then, use a loop to go through your command list, now converted into an array of
  numbers, and call functions from the function array depending on the number of
  each element in the command array.

Print the final values of X and Y once the string has been processed. */

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
let x = 0;
let y = 0;
console.log(`Original coordinates: ${x}, ${y}`)

// Array of functions
const functions = [
  function() { y++; return true; },
  function() { x++; return true; },
  function() { y--; return true; },
  function() { x--; return true; },
  function() { return true; }, // Do nothing
  function() { return false; } // Exit
];

/* Convert commandList into array of numbers.
   Use indexes in letters array to find 
   corresponding number for each letter. */
const letters = ["N", "E", "S", "W", "C", "B"]; // 0, 1, 2, 3, 4, 5
// Split commandList into array of letters
const commandArr = commandList.split("");
// Convert the letters to numbers in place
for (i = 0; i < commandArr.length; i++) {
  commandArr[i] = letters.indexOf(commandArr[i]);
}

// Apply commands
for (i = 0; i < commandArr.length; i++) {
  const ret = functions[commandArr[i]](); // true or false
  if (ret === false) {
    // command B = exit
    break;
  }
}

console.log(`Final coordinates: ${x}, ${y}`)