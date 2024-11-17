import { useState } from 'react';
import './App.css';
import Grid from './Grid';

function App() {

  const [indexRed, setIndexRed] = useState(0);
  const [indexBlue, setIndexBlue] = useState(1);

  const handleClick = (e) => {
    // Using onMouseDown to catch both left-click and right-click
    const cell = e.target;
    if (e.button === 0 && cell.className === "grid-item red") { // left button
      setIndexRed(getRandomIndex());
    } else if (e.button === 2 && cell.className === "grid-item blue") { // right button
      setIndexBlue(getRandomIndex());
    }
  }

  const getRandomIndex = () => {
    const index = Math.floor(Math.random() * 100); // 0 ... 99
    return index;
  }

  return (
    <>
      <h1>Grid Shooter 2</h1>
      <Grid 
        handleClick={handleClick}
        indexRed={indexRed}
        indexBlue={indexBlue}  
      />
    </>
  )
}

export default App;