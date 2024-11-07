import './App.css';
import { useState } from "react";
import bunnyImg from './assets/bunny.jpeg';

function App() {

  const [imgClass, setImgClass] = useState("visible");
  const [textClass, setTextClass] = useState("hidden");
  const [message, setMessage] = useState("You hit the bunny!");

  const handleBunnyClick = () => {

    const delay1 = 1000; // 1 sec
    const delay2 = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // 1 - 5 sec

    setImgClass("hidden"); // hide image
    setTextClass("visible"); // show message

    // hide message after 1 s
    setTimeout(() => {
      setTextClass("hidden");
    }, delay1);

    // display bunny again after 1 - 5 sec
    setTimeout(() => {
      setImgClass("visible");
    }, delay2);
  }

  // Note: Could use conditional rendering to hide/display items instead of classes
  return (
    <>
      <h1>Bunny game</h1>
      <div>Click the bunny!<br /><br /></div>
      <img className={imgClass} src={bunnyImg} onClick={() => handleBunnyClick()} />
      <div className={textClass}>{message}</div>
    </>
  )
}

export default App;