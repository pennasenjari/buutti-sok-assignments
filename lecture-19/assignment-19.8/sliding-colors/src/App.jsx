import './App.css';
import { useState } from 'react';

function App() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <>
      <h1>Sliding Colors</h1>
      <div>
        <label>
          Red:
          <input type='range'
            min='1'
            max='255'
            step='1'
            value={red}
            onChange={(e) => setRed(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Green:
          <input type='range'
            min='1'
            max='255'
            step='1'
            value={green}
            onChange={(e) => setGreen(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Blue:
          <input type='range'
            min='1'
            max='255'
            step='1'
            value={blue}
            onChange={(e) => setBlue(parseInt(e.target.value))} />
        </label>
      </div>
      <div style={{width: "300px", height: "300px", 
        backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
    </>
  )
}

export default App;