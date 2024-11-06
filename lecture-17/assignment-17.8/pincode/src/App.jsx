import './App.css';
import Button from './Button';

function App() {

  const pin = [5, 6, 7, 8];
  const clicks = [];
  // Extra: Max 3 wrong tries in a row
  let tries = 0;

  const handleClick = (event) => {
    if (tries >= 3) {
      // Too many wrong tries. Do nothing.
      console.log("Pin code disabled!");
    } else {
      const clicked = parseInt(event.target.id);
      clicks.push(clicked);
      if (clicks.length === 4) {
        tries++;
        if (pin.toString() === clicks.toString()) {
          tries = 0; // reset tries counter
          console.log('Correct pin');
        } else {
          console.log('Incorrect pin');
        }
        clicks.length = 0;
      }
    }
  }

  return (
    <>
      <h1>Pin code</h1>
      <Button nbr={0} handler={handleClick} />
      <Button nbr={1} handler={handleClick} />
      <Button nbr={2} handler={handleClick} />
      <Button nbr={3} handler={handleClick} />
      <Button nbr={4} handler={handleClick} />
      <Button nbr={5} handler={handleClick} />
      <Button nbr={6} handler={handleClick} />
      <Button nbr={7} handler={handleClick} />
      <Button nbr={8} handler={handleClick} />
      <Button nbr={9} handler={handleClick} />
    </>
  )
}

export default App;