import { useState } from 'react';

function App() {
    const [text, setText] = useState('');

    const onTextChange = (event) => {
      const text = event.target.value;
      console.log(text);
      setText(text);
    }

    return (
      <div className='App'>
        <h1>Elementary Input</h1>
        <div>Copy of text:{text}</div>
        <legend>Text:</legend>
        <input value={text} onChange={onTextChange} />
      </div>
    )
}

export default App;