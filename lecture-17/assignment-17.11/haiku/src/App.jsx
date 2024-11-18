import './App.css';
import haikuMirror from './assets/haiku_mirror.png';

function App() {

  const haiku = 
"Quietly, quietly, \n\
yellow mountain roses fall \n\
sound of the rapids";

  const haikuArr = haiku.split("\n");
  const headline = "Haiku";

  const reverseString = (string) => {
    return string.split('').reverse().join('');
  } 

  return (
    <div className="haiku">
      <div className="left">
        <h1>{reverseString(headline)}</h1>
        <img src={haikuMirror} className="haikuImageLeft" />
        {haikuArr.map((row, index) => {
          return <div key={index}>{reverseString(row)}</div>
        })}
      </div>
      <div className="center"></div>
      <div className="right">
        <h1>{headline}</h1>
        <img src={haikuMirror} className="haikuImageRight" />
        {haikuArr.map((row, index) => {
          return <div key={index}>{row}</div>
        })}
      </div>
    </div>
  )
}

export default App;