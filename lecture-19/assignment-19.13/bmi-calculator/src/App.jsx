import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [myBmi, setMyBmi] = useState(0);
  const [bmiColor, setBmiColor] = useState(0);

  const calculateBmi = () => {
    if (weight > 0 && height > 0) {
      const bmi = Math.round((weight / (height * height)) * 10000);
      setMyBmi(bmi);
    }
    // EXTRA: set BMI color
    // https://en.wikipedia.org/wiki/Body_mass_index#/media/File:BMI_chart.png
    if (myBmi < 18.5) {
      // underweight
      setBmiColor("#c0eeff");
    } else if (myBmi >= 18.5 && myBmi <= 24.9) {
      // normal
      setBmiColor("#b1ffa0");
    } else if (myBmi >= 25 && myBmi <= 29.9) {
      // overweight
      setBmiColor("#fff68d");
    } else if (myBmi >= 30 && myBmi <= 34.9) {
      // obese
      setBmiColor("#fecf8c");
    } else if (myBmi >= 35 && myBmi <= 39.9) {
      // severely obese
      setBmiColor("#ffb996");
    } else if (myBmi >= 40) {
      // very severely obese
      setBmiColor("#ffa1a1");
    }
  }

  useEffect(() => {
    // Display default BMI on page load
    calculateBmi();
  })

  return (
    <div className="App">
      <div className="calculator">
        <h1>BMI Calculator</h1>
        <div>Weight: {weight} kg</div>
        <div>
          <input type='range'
            min='1'
            max='200'
            step='1'
            value={weight}
            onChange={(e) => {setWeight(e.target.value); calculateBmi()}} 
          />
        </div>
        <div>Height: {height} cm</div>
        <div>
          <input type='range'
            min='1'
            max='250'
            step='1'
            value={height}
            onChange={(e) => {setHeight(e.target.value); calculateBmi()}} 
          />
        </div>
        <div>Your BMI is: <span className="bmi" style={{backgroundColor: bmiColor}}>{myBmi}</span> </div>
      </div>
    </div>
  )
}

export default App;