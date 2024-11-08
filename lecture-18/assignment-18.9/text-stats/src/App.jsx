import './App.css';
import { useState } from 'react';
import Form from './Form';
import Stats from './Stats';

function App() {

  const [stats, setStats] = useState([]);

  const updateStats = (event) => {
    const txt = event.target.value;
    const chars = txt.length; // count also empty spaces
    const words = txt.split(" ").length;
    const sentences = txt.split(".").length;
    const averageWordLength = Math.round(chars / words);
    const averageWordsPerSentence = Math.round(words / sentences);
    setStats({"chars": chars, "words": words, "sentences": sentences,
    "averageWordLength": averageWordLength, "averageWordsPerSentence": averageWordsPerSentence});
  }

  return (
    <>
      <h1>Text Stats</h1>
      <Form updateStats={updateStats} />
      <Stats stats={stats} />
    </>
  )
}

export default App;