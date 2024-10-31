import './App.css'
import RandomImage from './RandomImage.jsx';

function App() {

  return (
    <>
      <h1>Random Images</h1>
      <div id="images">
        <RandomImage />
        <RandomImage />
        <RandomImage />
      </div>
    </>
  )
}

export default App
