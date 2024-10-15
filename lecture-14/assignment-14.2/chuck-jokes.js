/* Use the free chucknorris.io API to create a command line program, that when executed
 tells you a Chuck Norris joke. Use Axios to handle the requests

Extra: Do this assignment using Fetch.

Extra: Add a feature where you can enter a search parameter and the program prints
 all the jokes that match the search parameter. This requires you to read through
 the documentation independently. */

import axios from "axios";

/* NOTE: run this in terminal with node. */

const response = await axios.get('https://api.chucknorris.io/jokes/random');
console.log(`\n${response.data.value}`)

// Extra
const response2 = await fetch('https://api.chucknorris.io/jokes/random')
const data = await response2.json()
console.log(`\n${data.value}`)

// Extra 2
import readline from 'readline/promises'; // supports await
const reader = readline.createInterface(process.stdin, process.stdout);
const query = await reader.question("\nGive a search word:");
reader.close();
const response3 = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
response3.data.result.forEach(element => {
  console.log(`\n${element.value}`)
});