import './App.css';
import { useState } from 'react';
import img1 from './assets/01.webp';
import img2 from './assets/02.webp';
import img3 from './assets/03.webp';
import img4 from './assets/04.webp';
import img5 from './assets/05.webp';
import img6 from './assets/06.webp';
import { TfiArrowCircleLeft as ArrowL } from "react-icons/tfi";
import { TfiArrowCircleRight as ArrowR } from "react-icons/tfi";

function App() {

  const images = [img1, img2, img3, img4, img5, img6];
  const [myIndex, setMyIndex] = useState(0);

  const go = (where) => {
    if (where === "left") {
      if (myIndex > 0) {
        // go to prev image
        setMyIndex(myIndex - 1);
      } else {
        // we're on first image, go to last
        setMyIndex(images.length - 1);
      }
    }
    if (where === "right") {
      if (myIndex < images.length - 1) {
        // go to next image
        setMyIndex(myIndex + 1);
      } else {
        // we're on last image, go to first
        setMyIndex(0);
      }
    }
    if (where === "random") {
      // display random image and make the image change every time
      let idx;
      while (true) { 
        idx = Math.floor(Math.random() * 6); // 0 ... 5
        if (idx !== myIndex) {
          break;
        }
      }
      setMyIndex(idx);
    }
  } 

  return (
    <div className="carousel">
      <h1>Image Carousel</h1>
      <div className="imageBrowser">
        <div onClick={() => go("left")}><ArrowL /></div>
        <img src={images[myIndex]} onClick={() => go("random")} />
        <div onClick={() => go("right")}><ArrowR /></div>
      </div>
    </div>
  )
}

export default App;