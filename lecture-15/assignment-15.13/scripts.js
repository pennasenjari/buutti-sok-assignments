// GLOBAL VARIABLES
// squares = all divs inside the tictactoe grid
const squares = document.querySelectorAll('#tictactoe div');
const rowCount = Math.sqrt(squares.length); // game area needs to be square
// mark = who's turn and the X or O itself
let mark = 'X'; // X starts the game
const newGameBtn = document.getElementById('newGameBtn');
newGameBtn.addEventListener('click',() => {
  newGame();
});

function isValidIndex(arr, i, j) {
  if (i >= 0 && i < arr.length) { // check if row index is valid
    if (j >= 0 && j < arr[i].length) { // check if column index is valid
      return true;
    }
  }
  return false;
}

function getGameArray() {
  /* copy squares listto 2-dimensional array so that
     coordinates can be used to refer the elements */
  const gameArr = [];
  const row = [];
  for (i = 0; i < squares.length; i++) {
    // copy the marks into array
    row.push(squares[i].innerHTML);
    if ((i +1) % rowCount === 0) { 
      // push the current row array to game array
      gameArr.push(row.splice(0)); // splice to copy instead creating a reference
    }
  }
  return gameArr;
}

function hasMark(gameArr, x, y) {
  // check if the given element contains currently selected mark (X or O)
  let isMark = false;
  if (isValidIndex(gameArr, x, y)) {
    if (gameArr[x][y] === mark) {
      isMark = true;
    }
  }
  return isMark;
}

function checkWin() {
  // Note: this function could be extended to bigger game areas.

  // convert nodeList to 2-dimensional array
  const gameArr = getGameArray();
  const winMarks = [];

  for (i = 0; i < gameArr.length; i++) { // loop rows
    for (j = 0; j < gameArr[i].length; j++) { // loop columns
      if (hasMark(gameArr, i, j)) {
        /* The current square includes requested X or O. Check the adjacent squares
           for the same charcter. It is enough to check towards east, southeast, south
           and southwest because the rest of the directions are just opposite to these. */
  
        // check east
        if (hasMark(gameArr, i, (j + 1))) {
          // A match! Check one more to same direction.
          if (hasMark(gameArr, i, (j + 2))) {
            // Three in a row! Win. Save location info to display the winning row.
            winMarks.push([[i, j],[i,(j + 1)], [i, (j + 2)]]);
            break;
            // To use more than 3 marks in a row (different game), extend here.
          }
        } 

        // check southeast
        if (hasMark(gameArr, (i + 1), (j + 1))) {
          if (hasMark(gameArr, (i + 2), (j + 2))) {
            winMarks.push([i, j], [(i + 1), (j + 1)], [(i + 2), (j + 2)]);
            break;
          }
        } 

        // check south
        if (hasMark(gameArr, (i + 1), j)) {
          if (hasMark(gameArr, (i + 2), j)) {
            winMarks.push([i, j], [(i + 1), j], [(i + 2), j]);
            break;
          }
        } 

        // check southwest
        if (hasMark(gameArr, (i - 1), (j + 1))) {
          if (hasMark(gameArr, (i - 2),(j + 2))) {
            winMarks.push([i, j], [(i - 1), (j + 1)], [(i - 2), (j + 2)]);
            break;
          }
        } 
      }
    }
  }

  // check for tie
  let markCounter = 0;
  for (i = 0; i < gameArr.length; i++) {
    for (j = 0; j < gameArr[i].length; j++) {
      if (gameArr[i][j].length > 0) {
        markCounter++;
      }
    }
  }

  if (markCounter === squares.length && winMarks.length === 0) {
    processTie();
    return true;
  } else if (winMarks.length === 3) {
    processWin(winMarks);
    return true;
  } else {
    return false;
  }
}

function processTie() {
  setFeedback(`It's a tie!`);
  for (square of squares) {
    // disable mouse clicks on squares
    square.style.pointerEvents = 'none';
  }
}

function processWin(winMarks) {
  setFeedback(mark + ' wins!');
  for (square of squares) {
    // disable mouse clicks on squares
    square.style.pointerEvents = 'none';
  }
  // highlight the winning squares
  for (i = 0; i < winMarks.length; i++) {
    // convert the coordinates back to list indexes.
    // example: coordinates [[0, 0], [1, 1], [2, 2]] equal indexes 0, 4 and 8 in nodeList.
    let x = parseInt(winMarks[i][0]);
    let y = parseInt(winMarks[i][1]);
    const index = x * rowCount + y;
    squares[index].classList.add('highlight');
  }
}

function setFeedback(text) {
  document.getElementById('feedback').innerHTML = text;
}

function newGame() {
  for (let square of squares) {
    // clear the marks
    square.innerHTML = '';
    // enable mouse clicks on squares
    square.style.pointerEvents = 'auto';
    square.classList.remove('highlight');
    newGameBtn.classList.add('disabled');
  }
  // X starts the game
  mark = 'X';
  setFeedback(`${mark}'s turn`)
}

function main() {

  setFeedback(`${mark}'s turn`)

  squares.forEach((square, index) => {
    square.addEventListener('click',() => {

      // enable the new game button
      if (newGameBtn.classList.contains('disabled')) {
        newGameBtn.classList.remove('disabled');
      }

      // check if square has mark already
      if (square.innerHTML.length > 0) {
        // Square has a mark already. Do nothing.
        console.log('Square is marked.')
      } else {
        // square is free, add mark
        square.innerHTML = mark;
        // Check if the game was won
        if (checkWin() === true) {
          // finish game
          return;
        } else {
          // toggle turn
          mark === 'X' ? mark = 'O' : mark = 'X';
          setFeedback(`${mark}'s turn`)
        }
      }
    })
  });

}

main();