/* Assignment 14.7: Fetching Universities

a) Use axios or fetch to fetch data about Finnish universities 
from http://universities.hipolabs.com/search?country=Finland 
Print the data after it has been fetched. You can use either Promises or
 async/await for the task.

b) Create an async function that fetches the same university information, but
 instead of printing it, it returns an array with just the university names in it.

Call your function and print the returned list. 
You can use either async/await or promises/then to handle the asynchronous function call. */

import axios from "axios";

// a)
const response = await axios.get('http://universities.hipolabs.com/search?country=Finland');
console.log(response.data);

// b)
async function getUniversities() {
  try {
    const res = await axios.get('http://universities.hipolabs.com/search?country=Finland');
    const names = [];
    for (let uni of res.data) {
      names.push(uni.name);
    }
    return names;
  } catch (error) {
    console.log(error)
  }
}

getUniversities().then(universities => console.log(universities)); // .then -> waiting to resolve
