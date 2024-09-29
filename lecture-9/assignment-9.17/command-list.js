/* Create a program where we have variables x and y coordinates representing 
  the position of a robot, and a command string that tells the robot 
  where it should move.

The robot has the following command string:

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

Using a loop of your choice, go through this string letter-by-letter.

Depending on the letter, an action should be taken for each encountered letter:

if the letter is N, increment Y
if the letter is E, increment X
if the letter is S, decrement Y
if the letter is W, decrement X
if the letter is C, skip to next letter without doing anything
if the letter is B, end the program and skip all the remaining commands
Print the final values of X and Y once the string has been processed.

Tip: you can use the charAt function to get an individual letter by index, 
  as is done in the code in assignment 6 */

let x = 0;
let y = 0;
const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
let finish = false;

console.log(`orignal x: ${x}, original y: ${y}`);
console.log(`Command list: ${commandList}\n`)

// Using "of" loop instead of "for" for fun :-)
for (let char of commandList) {
  switch (char) {
    case "N":
      y++;
      break;
    case "E":
      x++;
      break;
    case "S":
      y--;
      break;
    case "W":
      x--;
      break;
    case "C":
      // do nothing
      break;
    case "B":
      finish = true;
      break;
  }
  console.log(`x: ${x}, y: ${y}`);
  if (finish) {
    console.log(`\nLetter B found, stopped execution.`);
    break;
  }
}