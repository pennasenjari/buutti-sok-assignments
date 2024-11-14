import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);
 
  const handleOnWheel = (e) => {

    // EXTRA 2: increasing speed
    let speed = 1;
    if (number >= 50 && number < 100) {
      speed = 5;
    } else if (number >= 100) {
      speed = 10;
    }

    if (e.deltaY > 0) {
      if (number < 255) { // EXTRA 1: limit between 0 ... 255
        setNumber(number + (1 * speed));
      }
    } else {
      if (number > 0) {
        setNumber(number - (1 * speed));
      }
    } 
  }

  return (
    <>
      <h1>Scroll Counter</h1>
      <button onWheel={(e) => handleOnWheel(e)}>{number}</button>
    </>
  )
}

export default App;