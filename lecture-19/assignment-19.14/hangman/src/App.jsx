import './App.css';
import { useState, useEffect, useRef } from 'react';
import hangman1 from './assets/hangman1.png';
import hangman2 from './assets/hangman2.png';
import hangman3 from './assets/hangman3.png';
import hangman4 from './assets/hangman4.png';
import hangman5 from './assets/hangman5.png';
import hangman6 from './assets/hangman6.png';
import hangman7 from './assets/hangman7.png';

function App() {

  const [hangmanPic, setHangmanPic] = useState(hangman1);
  const [letters, setLetters] = useState([]);
  const [myLetter, setMyLetter] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [message, setMessage] = useState("");
  const [gameState, setGameState] = useState('initial'); // 'initial' | 'running' | 'won' | 'lost'
  const inputRef = useRef(null);

  const words = "Make a hangman game. The game should have a list of words and it picks one of them randomly. It should then show the player how many letters are there in the word and let the player guess the letters one by one. \
  If the player guesses correctly, the guessed letter is shown in the correct place on the word, so that the player always sees how the correct guesses they have made are placed in the word. The game should also display a message telling that the guess was correct. \
  If the player guesses all the letters the game ends and the player wins. The game shows a message telling that the game is over and that the player won. No further guesses can be made after this. \
  If the player guesses incorrectly, the game draws a picture of a hanged stick figure one step further. The game should show the player all the incorrec guessed made by the player. The game should also display a message telling that the guess was incorrect.\
  After certain amount of incorrect guesses, the stick figure is finished and the game ends and the player loses. The game shows a message telling what the correct word was. No further guesses can be made after this. \
  When the game is over, the player can restart the game. At this point the game resets to the beginning state with a new word. \
  ".split(" "); // store words in array

  const getLetters = () => {
    const minLength = 4;
    let word = "";
    while (true) {
      word = words[Math.floor(Math.random() * words.length)];
      word = word.replace(",", "").replace(".","").replace("\\","").toUpperCase();
      if (word.length >= minLength) {
        break;
      }
    }
    setLetters(word.split(""));
  }

  const startGame = () => {
    setGameState('running');
    setLetters([]);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    setHangmanPic(hangman1);
    setMessage("");
    getLetters();
    // Focus the text input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
 
  const winGame = () => {
    setGameState('won');
    setMessage(`Congrats, you won!`);
  }

  const loseGame = () => {
    setGameState('lost');
    setMessage(`Sorry, you lost! The correct word was ${letters.join("")}`);
  }


  const guess = () => {
    if (letters.includes(myLetter)) {
      const newCorrectLetters = [...correctLetters, myLetter];
      setCorrectLetters(newCorrectLetters);
      if (letters.every(letter => newCorrectLetters.includes(letter))) {
        winGame();
      }
    } else {
      setIncorrectLetters((prev) => [...prev, myLetter]);
      if (incorrectLetters.length >= 6) {
        setHangmanPic(hangman7);
        loseGame();
      } else if (incorrectLetters.length >= 5) {
        setHangmanPic(hangman6);
      } else if (incorrectLetters.length >= 4) {
        setHangmanPic(hangman5);
      } else if (incorrectLetters.length >= 3) {
        setHangmanPic(hangman4);
      } else if (incorrectLetters.length >= 2) {
        setHangmanPic(hangman3);
      } else if (incorrectLetters.length >= 1) {
        setHangmanPic(hangman2);
      } else {
        setHangmanPic(hangman1);
      }
    }
    setMyLetter("");
  }

  // run on first render
  useEffect(() => {
    startGame();
  }, []);
  
  // run on myLetter change
  useEffect(() => {
    if (myLetter.length > 0) {
      guess();
    }
  }, [myLetter]);

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <img src={hangmanPic} />
      <div className={["initial", "running"].includes(gameState) ? "visible" : "hidden"}>
        <div>
          Incorrect guesses: {incorrectLetters.length} / 7
        </div>
        <div>
          {incorrectLetters.map((letter, index) => <span key={index}>{letter} </span>)}
        </div>
      </div>
      <div className={["initial", "running"].includes(gameState) ? "visible" : "hidden"}>
        <input type="text" maxLength="1" value={myLetter} ref={inputRef}
        onChange={(e) => setMyLetter(e.target.value.toUpperCase())} />
      </div>
      <div className="word">
        {letters.map((letter, index) => {
          return correctLetters.includes(letter) ? 
            <div key={index}>{letter}</div> : 
            <div key={index}>__</div>})
        }
      </div>
      <div>{message}</div>
      <div>{gameState === "won" || gameState === "lost" ? 
        <button onClick={startGame}>New Game</button> : null }</div>
    </div>
  )
}

export default App;