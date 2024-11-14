import { useState } from 'react';
import './App.css';
import music from './assets/music.json'; // state not needed

function App() {

  const [filter, setFilter] = useState("");

  const filteredMusic = music.filter((song) => {
    return (
      song.title.toLowerCase().includes(filter.toLowerCase())
      || song.composer.toLowerCase().includes(filter.toLowerCase())
      || song.year.toString().startsWith(filter)
      || song.keyword.toLowerCase().includes(filter.toLowerCase())
    )
  });

  return (
    <>
      <h1>Classic Search</h1>
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
      {filteredMusic.map((song) => {
        return (
          <div key={song.id}>
            <h2>{song.title}</h2>
            <p>Composer: {song.composer}</p>
            <p>Year: {song.year}</p>
            <p>Keyword: {song.keyword}</p>
          </div>
        )
      })}
    </>
  )
}

export default App;