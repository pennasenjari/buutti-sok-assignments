import { useState } from 'react';
import './App.css';
import words from './assets/Words';
import Display from './Display';
import Keyboard from './Keyboard';
import Info from './Info';

function App() {

  const [gameStatus, setGameStatus] = useState("new"); // new, running, finished
  const [randomWord, setRandomWord] = useState("");
  const [shuffledWord, setShuffledWord] = useState("");
  const [myWord, setMyWord] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleLetterClick = (e) => {
    const letter = e.target.value;
    const newWord = myWord + letter;
    setMyWord(newWord);
    // compare to newWord instead of myWord to avoid delay in state update
    if (newWord.length >= 4) { 
      setGameStatus("finished");
      // EXTRA: any word in the words list is accepted
      if (words.includes(newWord)) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
  }

  const getRandomWord = () => {
    // reset user's guess
    setMyWord("");
    // randomize a word from 1000
    const index = Math.floor(Math.random() * words.length);
    setRandomWord(words[index]);
    // shuffle the word
    const letters = words[index].split("");
    letters.sort(() => Math.random() - 0.5);
    setShuffledWord(letters.join(""));
  }

  const startGame = () => {
    getRandomWord();
    setGameStatus("running");
  }

  return (
    <>
      <h1>Word Shuffle</h1>
      <Info gameStatus={gameStatus} startGame={startGame} isCorrect={isCorrect} 
        randomWord={randomWord} />
      <Keyboard shuffledWord={shuffledWord} myWord={myWord}
        handleLetterClick={handleLetterClick}/>
      <Display gameStatus={gameStatus} myWord={myWord} startGame={startGame} />
    </>
  )
}

export default App;