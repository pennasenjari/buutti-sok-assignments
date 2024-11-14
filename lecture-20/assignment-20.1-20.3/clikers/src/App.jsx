import './App.css';
import { useState } from 'react';

function App() {

  const [counters, setCounters] = useState([]);

  const updateCounter = (index) => {
    const newCounters = counters.map((cntr, i) => {
      if (i === index) {
        // Increment the clicked counter
        return cntr + 1;
      } else {
        // The rest haven't changed
        return cntr;
      }
    });
    setCounters(newCounters);
  }

  const addCounter = () => {
    setCounters([...counters, 0]);
  }

  const removeCounter = (index) => {
    const newCounters = counters.filter((cntr, i) => {
      if (i === index) {
        // Do not add the clicked counter
        return false;
      } else {
        // Add the other counters
        return true;
      }
    });
    setCounters(newCounters);
  }

  return (
    <>
      <h1>Clickers</h1>
      <button onClick={() => addCounter()}>+</button>
      {counters.map((counter, index) => {
         {/* VS Code's notice about missing key can be ignored at this point */}
         {/* Using onMouseDown to avoid onClick + onDoubleClick in same handler */}
         return  <button 
          onMouseDown={() => updateCounter(index)}
          onDoubleClick={() => removeCounter(index)}>{counters[index]}
        </button>
      })}
    </>
  )
}

export default App;