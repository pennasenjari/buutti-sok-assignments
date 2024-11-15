import { useEffect, useState } from 'react';
import './App.css';

const fetchSongs = async () => {
  const fetchResult = await fetch('./src/assets/songs.txt');
  const fileContents = await fetchResult.text();
  return fileContents.split('\n');
};

function App() {
  const [songs, setSongs] = useState([]);

  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const loadSongs = async () => {
      const songList = await fetchSongs();
      setSongs(songList);
    };
    loadSongs();
  }, []);

  useEffect(() => {
    const loadSongs = async () => {
      const songList = await fetchSongs();
      setSongs(songList);
    };
    loadSongs();
  }, []);

  const filteredSongs = songs.filter((song) =>
    song.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <>
      <h1>Beatles Songs</h1>
      <div>
        Search: <input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
      </div>
      {filteredSongs.map((song, index) => (
        <div key={index}>{song}</div>
      ))}
    </>
  );
}

export default App;
