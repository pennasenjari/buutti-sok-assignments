import './App.css';
import { useState } from 'react';

function App() {

  const [header, setHeader] = useState("Header Manipulation");
  const [font, setFont] = useState({"size": 20, "weight": "normal", "style": "normal",
    "decoration": "", "family": "Arial, sans-serif"});

  // EXTRA: Font Family Selection
  const fontFamilies = [
    'Arial, sans-serif',
    'Georgia, serif',
    'Courier New, monospace',
    'Tahoma, sans-serif',
    'Times New Roman, serif'
  ];

  return (
    <>
      <h1 style={{fontSize: `${font.size}px`, fontWeight: `${font.weight}`, 
      fontStyle: `${font.style}`, textDecoration: `${font.decoration}`,
      fontFamily: `${font.family}`}} >{header}</h1>
      <div>
        <label>Header text:
          <input type="text" value={header} onChange={(e) => setHeader(e.target.value)} />
        </label>
      </div>
      <div>
        <label>Font size:
          <input type='range'
            min='1'
            max='100'
            step='1'
            value={font.size}
            onChange={(e) => setFont({...font, "size": e.target.value})} />
        </label>
        <input type="number" value={font.size} 
        onChange={(e) => setFont({...font, "size": e.target.value})} />
      </div>
      <div>
        <label>Bold:
          <input type='checkbox' checked={font.weight === "bold"}
          onChange={() => setFont({...font, weight: font.weight === "normal" ? "bold" : "normal"})} />
        </label>
      </div>
      <div>
        <label>Italic:
          <input type='checkbox' checked={font.style === "italic"}
          onChange={() => setFont({...font, style: font.style === "normal" ? "italic" : "normal"})} />
        </label>
      </div>
      <div>
        <label>Underline:
          <input type='checkbox' checked={font.decoration === "underline"}
          onChange={() => setFont({...font, decoration: font.decoration === "" ? "underline" : ""})} />
        </label>
      </div>
      <div>
        {/* EXTRA: FONT FAMILY SELECTION */}
        <label>Font Family:
          <select onChange={(e) => setFont({...font, "family": e.target.value})} value={font.family}>
            {fontFamilies.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  )
}

export default App;