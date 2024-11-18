import './App.css';

function App() {

  // array of 100 elements to create 100 divs
  const divs = Array.from({ length: 100 }, (_, index) => index);
  // colors for repetition
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  let i = 0;
  let forward = true; // direction of colors

  return (
    <div className="container">
      <div className="header">
        <h1>Repeating Rainbow</h1>
      </div>
      <div className="rainbow">
        {divs.map((_,index) => {
          const ret = <div key={index} style={{backgroundColor: colors[i]}}></div>;
          if (i === 0 ) {
            // index 0, switch direction up
            forward = true;
          } else if (i > 0 && i % 5 === 0) {
            // index 5 (6th color), switch direction down
            forward = false;
          }
          if (forward) {
            i++;
          } else {
            i--;
          }
          return ret;
        })}
      </div>
    </div>
  )
}

export default App;