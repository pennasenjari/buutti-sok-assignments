import { useState, useEffect } from 'react';
import './App.css';
import Grid from './Grid';

function App() {

  const [points, setPoints] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const handleClick = (event) => {
    const cell = event.target;
    if (cell.className === "grid-item red") {
      setPoints(points + 1);
    } else {
      setPoints((points) => (points - 1));
    }
  }

  useEffect(() => {
    // Code here runs after points have updated
    // Needed to end game immediately after points drop below zero.
    if (points < 0) {
      setIsRunning(false);
    }   
  }, [points]); 

  const resetGame = () => {
    setPoints(0);
    setIsRunning(true);
  }

  const getRandomIndex = () => {
    const index = Math.floor(Math.random() * 100); // 0 ... 99
    return index;
  }

  return (
    <>
      <h1>Grid Shooter</h1>
      <Grid handleClick={handleClick} randomIndex={getRandomIndex()} isRunning={isRunning} />
      <div className={isRunning ? "points visible" : "points hidden"}>Points: {points}</div>
      <div className={isRunning ? "game-over-hidden" : "game-over-visible"}>
        <h2>Game over!</h2>
        <a onClick={() => resetGame()}>New game</a>
      </div>
    </>
  )
}

export default App;