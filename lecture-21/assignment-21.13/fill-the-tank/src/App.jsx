import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [isFilling, setIsFilling] = useState(false);
  const [liters, setLiters] = useState(0);
  const [price, setPrice] = useState(0);
  const [pricePerLiter, setPricePerLiter] = useState(1.75); // Initial price
  const litersPerSecond = 0.83;
  const timerRef = useRef(null); // Persist interval ID between renders

  const toggleFill = () => {
    setIsFilling((prev) => {
      if (!prev) {
        // Reset liters and price when starting
        setLiters(0);
        setPrice(0);
      }
      return !prev;
    });
  };

  const handlePriceChange = (newPrice) => {
    setPricePerLiter(Number(newPrice));
  };

  useEffect(() => {
    if (isFilling) {
      timerRef.current = setInterval(() => {
        setLiters((prev) => prev + litersPerSecond);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    // Cleanup when the component unmounts
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isFilling, litersPerSecond]);

  useEffect(() => {
    setPrice(liters * pricePerLiter);
  }, [liters, pricePerLiter]);

  return (
    <>
      <h1>Fill the tank!</h1>
      <div>
        <label>
          Set price per liter:
          <input
            type="number"
            min="0.2"
            max="10.0"
            step="0.01"
            value={pricePerLiter}
            onChange={(e) => handlePriceChange(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Adjust price (range):
          <input
            type="range"
            min="0.2"
            max="10.0"
            step="0.01"
            value={pricePerLiter}
            onChange={(e) => handlePriceChange(e.target.value)}
          />
        </label>
      </div>
      <div>Price per liter: {pricePerLiter.toFixed(2)} €</div>
      <div>Liters: {liters.toFixed(2)}</div>
      <div>Total cost: {price.toFixed(2)} €</div>
      <div>
        <button onClick={toggleFill}>
          {!isFilling ? "Start" : "Stop"}
        </button>
      </div>
    </>
  );
}

export default App;
