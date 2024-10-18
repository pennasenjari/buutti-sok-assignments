/* Create a program that generates two random integers and asks the user for the sum
 of the integers. If the user answers correctly, the game continues. If the user answers
 incorrectly, the game ends.

Extra: Make the game progressively more difficult. Start with numbers between 1 and 10,
 and every 5 answers increase the range.

Extra: Include subtraction and multiplication in the questions */

/* NOTE: run in terminal ($node math-game.js) */

import readline from 'readline';
const reader = readline.createInterface(process.stdin, process.stdout);

function randomNumber() {
  // Extra 1: progressively harder
  if (questionCounter < 3) { // 5 is too much...
    return Math.floor(Math.random() * 10 + 1);
  } else if (questionCounter < 6) {
    return Math.floor(Math.random() * 100 + 1);
  } else {
    return Math.floor(Math.random() * 1000 + 1);
  }
} 

let questionCounter = 0;

function runGame() {
  let num1 = randomNumber();
  let num2 = randomNumber();
  // Extra 2: subtraction and multiplication
  const operators = ["+", "-", "*"];
  // randomize operator
  const operator = operators[(Math.floor(Math.random() * 3 + 1) - 1)];

  reader.question(`How much is ${num1} ${operator} ${num2}?`, (answer) => {
    if (parseInt(answer) === eval(`${num1} ${operator} ${num2}`)) {
      console.log(`Correct :-)`);
      questionCounter++;
      runGame();
    } else {
      console.log(`Wrong answer. Game over :-(`);
      reader.close()
    }
  })
}

console.clear();
runGame();