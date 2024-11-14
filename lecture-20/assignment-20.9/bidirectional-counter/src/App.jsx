import './App.css';
import { useState } from 'react';

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const listenDoubleClicks = (e) => {
    e.preventDefault();
    if (e.button === 0 && e.detail === 2) { // left mouse button pressed 2 times in short time
      setCount2(count2 + 1)    
    } else if (e.button === 2 && e.detail === 2) { // right mouse button
      setCount2(count2 - 1)    
    }
  }

  return (
    <>
      <h1>Bidirectional Counter</h1>
      <button
        onClick={() => setCount1(count1 + 1)}
        onContextMenu={(e) => {e.preventDefault(); setCount1(count1 - 1)}}
      >{count1}</button>
      {/* EXTRA: double clicks */}
      <button
        onContextMenu={(e) => {e.preventDefault()}}
        onMouseDown={(e) => {listenDoubleClicks(e)}}
      >{count2}</button>
    </>
  )
}

export default App;