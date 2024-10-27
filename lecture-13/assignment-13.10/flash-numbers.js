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

/* RUN IN TERMINAL: $node flash-numbers.js */

import readline from 'readline/promises';
const reader = readline.createInterface(process.stdin, process.stdout);
let points = 0;
let difficulty = null; // to be asked from user
let delay = null; // calculated based on difficulty and progress
let toRememberAmount = 3; // Amount of numbers / letters to rememeber

async function askDifficulty() {
  if (!difficulty) {
    let answer = await reader.question(`Select your difficulty level by giving a number.\n\
1 = Easy, 2 = Medium, 3 = Hard:\n`);
    answer = parseInt(answer);
    if (![1, 2, 3].includes(answer)) {
      // Accept only 1, 2 or 3 as an answer
      await askDifficulty();
    } else {
      difficulty = answer;
      return true;
    }
  }
}

function getCharsToRemember() {
  
  const toRemember = [];
  // difficulty 1, easy
  const values = ['1', '2', '3', '4', '5']; 
  if (difficulty === 2) {
    // medium
    values.push('6', '7', '8', '9');
  } else if (difficulty === 3) { 
    // hard
    values.push('A', 'B', 'C', 'D');
  }
  for (let i = 0; i < toRememberAmount; i++) {
    const randomIndex = Math.floor(Math.random() * values.length);
    toRemember.push(values[randomIndex]);
  }
  return toRemember;
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
  points += toRememberAmount * factor;
}

const wait = (delay) => {
  const t = Date.now() + delay
  while(Date.now() < t) {}
}

async function setDelay() {
  // set initial delay, or reset to it when going under 1 s
  if (!delay || delay < 1000)  {
    switch(difficulty) {
      case 1:
        delay = 1500;
        break;
      case 2:
        delay = 1000;
        break;
      case 3:
        delay = 500;
    }  
  } else {
    // Default: reduce delay by 0,25 s
    delay -= 250;
  }
  return true;
}

async function setToRememberAmount() {
  // When delay goes under 1 s, add one character to be remembered
  if (points > 0 && delay < 1000) { // do not add before first question (points 0)
    toRememberAmount++;
  }
  return true;
}

async function runGame() {

  await askDifficulty();
  await setDelay();
  await setToRememberAmount();
  const toRemember = getCharsToRemember();
  let isFail = false;
  console.log(`Please memorize these: ${(toRemember.toString()).replaceAll(',', '')}`);
  wait(delay);
  console.clear();
  let answer = await reader.question(`What were the numbers or letters?\n`);
  if (!answer || answer.length !== toRememberAmount) {
    isFail = true;
  } else {
    answer = answer.split('');
    for (let i = 0; i < toRememberAmount; i++) {
      if (toRemember[i].toUpperCase() !== answer[i].toUpperCase()) {
        isFail = true;
        break;
      }
    }
  }
  if (isFail) {
    console.log(`Wrong answer. You got ${points} points. Bye!`);
    reader.close();
    return;
  }
  console.log(`Correct :-)`);
  addPoints();
  // Loop questions
  runGame();
}

console.clear();
console.log(`Welcome to memory game!`);
runGame();