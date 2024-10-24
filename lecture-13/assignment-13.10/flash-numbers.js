/* Create a game that shows numbers to the player for a short time, then hides them,
 and the player needs to remember what the numbers were.

a) The game shows three numbers between 0 and 9, and waits for three seconds before
 hiding the numbers.

b) Every time the player answers correctly, the time the numbers are visible is shortened
 by 250ms.

c) Every time the time limit goes below 1 second, another number is added to the list,
 so that the next time the player needs to memorize one more number. 
The timer resets to the time 1000ms times the number of numbers, ie. if the player
 needs to memorize five numbers, they start with 5000ms.

Extra: When the game ends, the player gets to see their score. Score is calculated
 so that the player gets points for every number sequence they got correctly. 
The score is calculated so that each number in the sequence gives the player points as follows:

2000ms or over: 100 points
1750ms: 125 points
1500ms: 150 points
1250ms: 175 points
1000ms: 200 points So on the very first round the player gets 300 points, because there's
 3000ms time to look at the numbers, and there are 3 numbers. 
If the player reaches a stage where they have 1500ms to look at five numbers, they get 750 pts.

Extra: Before the game starts, the player can choose their difficulty level.

Easy: numbers 1 to 5, starting time 1500ms per number
Normal: numbers 0 to 9, starting time 1000ms per number
Hard: numbers 0 to 9 plus letters A,B,C and D, starting time 500ms per numer */

import readline from 'readline';

// NOTE: run this program in terminal with node ($node flash-numbers.js)

const reader = readline.createInterface(process.stdin, process.stdout);
let points = 0;
let numberAmount = 3;
let delay = 3000;

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function addPoints() {

  let factor = 100; // default
  if (delay <= 1000) {
    factor = 200;
  } else if (delay <= 1250) {
    factor = 175;
  } else if (delay <= 1500) {
    factor = 150;
  } else if (delay <= 1750) {
    factor = 125;
  }
  points += numberAmount * factor;
}

function runGame() {

  const numbers = [];
  for (let i = 0; i < numberAmount; i++) {
    numbers.push(getRandomNumber());
  }

  console.log(`Please memorize these numbers: ${(numbers.toString()).replaceAll(',', ' ')}`);

  let answerOK = true;

  setTimeout(() => {
    console.clear();
    reader.question(`What were the numbers?\nSeparate numbers with spaces:\n`, (answer) => {
      const numbersAnswered = answer.split(' ');
      for (let i = 0; i < numberAmount; i++) {
        if (parseInt(numbers[i]) !== parseInt(numbersAnswered[i])) {
          console.log(`Wrong answer. You got ${points} points. Bye!`);
          reader.close();
          answerOK = false;
          break;
        } else {
          console.log(`Correct :-)`);
          addPoints();
          // console.log(`Current points: ${points}`); // disabled, disturbs the game
          if (delay >= 1000) {
            delay -= 250;
          } else {
            numberAmount++;
            delay = numberAmount * 1000;
          }
          runGame();
          break;
        }
      }
    })
  }, delay)
}

console.clear();
console.log(`Welcome to memory game.`);
runGame();