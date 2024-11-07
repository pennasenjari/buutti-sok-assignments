import './App.css';
import { useState } from "react";

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <>
      <h1>Counters</h1>
      <button onClick={() => {setCount1(count1 + 1); setSum(sum + 1)}}>{count1}</button>
      <button onClick={() => {setCount2(count2 + 1); setSum(sum + 1)}}>{count2}</button>
      <button onClick={() => {setCount3(count3 + 1); setSum(sum + 1)}}>{count3}</button>
      <div>Total: {sum}</div>
    </>
  )
}

export default App;