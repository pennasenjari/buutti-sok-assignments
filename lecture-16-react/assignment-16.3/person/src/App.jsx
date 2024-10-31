import './App.css'

function App() {

  const name = "Bill ";
  const age = 40;
  const weight = 80; // kg's
  const height = 1.80; // meters
  const BMI = Math.round(weight / (height * height));

  return (
    <>
      <div>
      <h1>{name}</h1>
      Age: {age}<br />
      Weight: {weight}<br />
      Height: {height}<br />
      BMI: {BMI}
      </div>
    </>
  )
}

export default App
