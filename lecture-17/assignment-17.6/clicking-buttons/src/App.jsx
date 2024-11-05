import './App.css'

function App() {

  const logNumber = (event) => {
    event.preventDefault();
    const clicked = event.target.id;
    const now = new Date().toISOString();
    console.log(`User clicked button ${clicked} at ${now}`);
  }

  return (
    <>
      <h1>Clicking Buttons</h1>
      <button id="0" onClick={logNumber}>0</button>
      <button id="1" onClick={logNumber}>1</button>
    </>
  )
}

export default App
