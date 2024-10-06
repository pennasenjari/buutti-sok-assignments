/* EXTRA

Let us return to the robot in assignment 11.13.

There we had the x and y variables as globals (global variables). However, what if we want
 to have multiple robots?

Create a Robot class with x and y properties. Inside the class, also create 
a handleCommandList function that takes a command list (string) as a parameter 
and handles it exactly like in task 3, except that it must affect the x and y coordinates
 of the Robot class instance rather than global variables.

Create an instance of the class and run the 
"NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE" command list through the robot. 
Print the robot afterwards and verify its coordinates to be x === 8, y === 7 to make sure
your class works correctly. */

class Robot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  handleCommandList(commandList) {

    const commandHandlers = {
      "N": () => { this.y++; }, // Need to use arrow syntax. function() { this.y++ } won't work!
      "E": () => { this.x++ },
      "S": () => { this.y-- },
      "W": () => { this.x-- },
      "C": () => { return }
    } 
    
    const commandArr = commandList.split("");
    console.log(`Executing commands...`);
    
    for (let command of commandArr) {
      if (command === "B") {
        console.log(`Letter B found, stopped execution.`);
        break;
      } else {
        commandHandlers[command]();
      }
    }
    console.log(`Commands executed.`);
  }
} 
 
const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
console.log(`Command list: ${commandList}`)

const robot1 = new Robot(0, 0);
const robot2 = new Robot(1, 2);

console.log(`\nOriginal values in Robot 1: x:${robot1.x} y:${robot1.y}`);
robot1.handleCommandList(commandList);
console.log(`Final values in Robot 1: x:${robot1.x} y:${robot1.y}`);

console.log(`\nOriginal values in Robot 2: x:${robot2.x} y:${robot2.y}`);
robot2.handleCommandList(commandList);
console.log(`Final values in Robot 2: x:${robot2.x} y:${robot2.y}`);