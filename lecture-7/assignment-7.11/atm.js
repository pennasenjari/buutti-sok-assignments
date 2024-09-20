/* Create a ATM program to check your balance.
Create variables balance, isActive, checkBalance.
Write conditional statements that implement the flowchart below.
Change the values of balance, checkBalance, and isActive to test your code! */

// Creating a working program, using repetitive user input.
// Run this in terminal: $node atm.js

// Built-in module in node.js
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Default values
let balance = 10;
let isActive = true;
let checkBalance = false; // Is this needed?

function CloseATM() {
  rl.close()
  rl.removeAllListeners()  
  console.log(`Have a nice day!`)
}

const action = rl.question("Welcome to ATM. Would you like to check your balance? (y/n)",
  (checkBalance) => {
    switch (checkBalance) {
      case "y":
        if (!isActive) {
          console.log(`Sorry, your account is not active!`);
        } else if (balance < 0) {
          console.log(`Your balance is negative! How is that possible?`);
        } else if (balance === 0) {
          console.log(`Your account is empty :-(`);
        } else {
          console.log(`Your balance is ${balance}.`);
        }
        break;
      case "n":
        // Close ATM
        break;
      default:
        // User wrote something else than y or n
        console.log(`Invalid input. You need to write y or n. Please try again.`)
        break;
    }
    CloseATM();
  }
)

