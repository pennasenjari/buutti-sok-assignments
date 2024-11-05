import './App.css';
import Instrument from './Instrument.jsx';
import guitar from './assets/guitar.png';
import violin from './assets/violin.jpeg';
import tuba from './assets/tuba.jpg';

function App() {

  return (
    <>
      <div className="instruments">
        <h1>Instruments</h1>
        <Instrument image={guitar} name={"Guitar"} price={10} />
        <Instrument image={violin} name={"Violin"} price={20} />
        <Instrument image={tuba} name={"Tuba"} price={30} />
      </div>
    </>
  )
}

export default App
