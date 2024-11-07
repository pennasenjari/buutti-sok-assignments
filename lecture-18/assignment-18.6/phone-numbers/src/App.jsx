import './App.css';
import { useState } from 'react';
import NumberForm from './NumberForm';

function App() {

  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  const addNumber = (event) => {
    const nbr =  event.target.value;
    if (nbr.length >= 10) {
      setNumbers(prev => [...prev, nbr]); // create new array including changes
      setNumber("");
    } else {
      setNumber(nbr);
    }
  }

  return (
    <>
      <h1>Phone Numbers</h1>
      <NumberForm number={number} addNumber={addNumber} />
      <div>{numbers.map((n) => {
        // note: duplicate number causes a warning about key
        return <div key={n}>{n}</div>
      })}</div>
    </>
  )
}

export default App;