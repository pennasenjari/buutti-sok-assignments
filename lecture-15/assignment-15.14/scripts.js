// Global variables
const colorButtons = document.querySelectorAll('#colorButtons div');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const pointsText = document.getElementById('pointsText');
const feedback = document.getElementById('feedback');
let points = 0;
let gameEngine;

function shuffleColors() {
  const colors = ['red','green','blue','yellow'];
  let numbers = [0, 1, 2, 3];
  // memorize old numbers
  const oldNumbers = [...numbers]; // ES6 style to clone array
  while (true) {
    // -0.5 to produce negative and positive numbers between -0.5 - 0.5
    numbers.sort(() => Math.random() - 0.5);
    // ensure that the new order differs from old
    if (numbers.toString() !== oldNumbers.toString()) {
      // ok, exit loop
      break;
    };
  }
  return [colors[numbers[0]], colors[numbers[1]], colors[numbers[2]], colors[numbers[3]]];
}

function setColors() {
  const colors = shuffleColors();
  let i = 0;
  for (let button of colorButtons) {
    button.classList =  [];
    button.classList.add('colorButton');
    button.classList.add(colors[i]);
    i++;
  }
}

function startGame() {
  points = 10;
  gameEngine = setInterval(setColors, 1000);
  startButton.classList.add('hidden');
  stopButton.classList.remove('hidden');
  for (let colorButton of colorButtons) {
    colorButton.classList.remove('disabled');
  }
  pointsText.classList.remove('hidden');
  setPointsText(points + ' points');
}

function endGame() {
  window.clearInterval(gameEngine);
  stopButton.classList.add('hidden');
  startButton.classList.remove('hidden');
  for (let colorButton of colorButtons) {
    colorButton.classList = [];
    colorButton.classList.add('colorButton');  
  }
  setPointsText('Game over :-(');
}

function setFeedback(text) {
 feedback.innerHTML = text;
}

function setPointsText(text) {
  pointsText.innerHTML = text;
}

function main() {

  colorButtons.forEach((btn, index) => {
    btn.addEventListener('click',() => {
      if (btn.classList.contains('red')) {
        points++;
      } else {
        points--;
        if (points < 0) {
          endGame();
          return;
        }
      }
      setPointsText(points + ' points');
    })
  });

  startButton.addEventListener('click',(btn) => {
    startGame();
  });

  stopButton.addEventListener('click',(btn) => {
    endGame();
  });

}

main();