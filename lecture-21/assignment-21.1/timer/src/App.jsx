import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(true);

 // isActive! Look Petri example
 // setIsActive(prev => !prev)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSeconds(prev => prev + 1);
      if (seconds === 59) {
        setMinutes(prev => prev + 1); // prev to ensure that latest value is used
        setSeconds(0);
      }
    }, 1000)

    // return a function that React can call to clear our timeout
    // the next time this effect is updated
    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <div className="timer">
      <h1>Timer</h1>
      <div>{minutes}:{seconds}</div>
      <div><button onClick={() => setSeconds(0)} >Reset counter</button></div>
    </div>
  )
}

export default App;