import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [jokes, setJokes] = useState([]);
  const [myJoke, setMyJoke] = useState("");

  const url = 'https://api.api-ninjas.com/v1/dadjokes'
  const config = {
    headers: {
      'X-Api-Key': 'qFRwfcoEjiLRvRYhJirWtQ==1JTjQy3ah2MoAPgM'
    }
  }

    useEffect(() => { // leave callback function as synchronous
        async function fetchData() { // declare async function inside callback
            const res = await fetch(url, config);
            const jokes = await res.json();
            setJokes(jokes);
            if (jokes) {
              const rnd = Math.floor(Math.random() * jokes.length);
              setMyJoke(jokes[rnd].joke);
            }
        }
        fetchData(); // call the async function inside synchronous callback
    }, []); // set the second argument as [] to avoid loop from state change

    return (
      <>
        <h1>Dad Jokes</h1>
        {myJoke}
      </>
    )
  };

export default App;