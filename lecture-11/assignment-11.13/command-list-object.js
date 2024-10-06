/* EXTRA: Command list, now with an object (see also assignment 9.17)

Create a program where we have variables x and y, representing coordinates of a robot, 
and a command string that tells the robot where it should move.

The robot has the following command string:

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
Using a loop of your choice, go through this string letter-by-letter.

Depending on the letter, an action should be taken for each encountered letter:

if the letter is N, increment Y
if the letter is E, increment X
if the letter is S, decrement Y
if the letter is W, decrement X
if the letter is C, skip to next letter without doing anything
if the letter is B, skip all the remaining commands

Create an object named commandHandlers with functions for handling the commands. For example,
  in the object, the value of the N property would be a function that 
  increments Y, like N: () => y++.

The only special case is the letter B, which you have to handle with an if conditional 
 inside the loop.

Make sure to create the command handler object outside of the loop so you're not re-creating
  it on each iteration of the loop!

x and y have initial values of 0. Print the final values of x and y once the string has been
  processed.

If you did the assignment correctly, x and y should respectively be 8 and 7 after processing
  the string. */

let x = 0;
let y = 0;
const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
console.log(`\nOrignal values: x: ${x}, y: ${y}`);
console.log(`Command list: ${commandList}`)

function runCommands(commandList) {

  const commandHandlers = {
    "N": function() { y++ },
    "E": function() { x++ },
    "S": function() { y-- },
    "W": function() { x-- },
    "C": function() {return;}
  } 
  
  const commandArr = commandList.split("");
  console.log(`Executing commands...`);
  
  for (command of commandArr) {
    if (command === "B") {
      console.log(`Letter B found, stopped execution.`);
      break;
    } else {
      commandHandlers[command]();
    }
  }
  console.log(`Commands executed.`)  
}

runCommands(commandList);
console.log(`Final values: x:${x} y:${y}`);