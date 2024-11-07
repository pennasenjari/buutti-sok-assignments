import './App.css';
import { useState } from "react";

function App() {

  const [lightClass, setLightClass] = useState("light red");
  const [textClass, setTextClass] = useState("hidden");

  const handleLightClick = () => {
    // Note: could use click counter to detect the class
    if (lightClass === "light red") {
      setLightClass("light yellow")
    } else if (lightClass === "light yellow") {
      setLightClass("light green")
    } else {
      setLightClass("hidden");
      setTextClass("text");
    }
  }

  // Note: could use ternary operator to show/hide elements
  return (
    <>
      <h1>Traffic Light</h1>
      <div>Click the light!<br /><br /></div>
      <div className={lightClass} onClick={() => handleLightClick()}></div>
      <div className={textClass}>Go!</div>
    </>
  )
}

export default App;