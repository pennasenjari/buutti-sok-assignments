/*
Create a variable called name.
If the variable has a valid value, make the program greet the user by their name.
If the variable's value is null or undefined, make the program print 
  "Please give me your name!" instead.
Make use of the ternary operator in this task.
*/

// NOTE: Run in terminal: $ node ternary.js

// Built-in in Node.js
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ExitReadline() {
  rl.close()
  rl.removeAllListeners()  
}

// Function to prompt the user for (correctly formed) name
function askName() {
  let error = false;
  rl.question("Please give your name (or ctrl + c to cancel):\n", (name) => {
    name === undefined || name === null || name === ""
    ? askName()
    : (console.log(`Thanks ${name}!`), ExitReadline())
  });
}

askName();