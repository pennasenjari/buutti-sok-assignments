/* Write a function that generates a random number within range, 
  rounded to nearest integer. Function takes in two numbers, min and max.

Hint: Math.random()

Note: It is a common convention to have the starting point of a range to be inclusive,
  and the ending point exclusive. For example the substring function takes two parameters
  following this convention.
  Following this logic will make the use of the Math library easier. */

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min); // Inclusive
    const maxFloored = Math.floor(max); // Exclusive
    const randomBase = Math.random();
    console.log(randomBase);
    const finalRandom = randomBase * (maxFloored - minCeiled) + minCeiled;
    console.log(finalRandom);
    return Math.floor(finalRandom); 
  }

  console.log(getRandomInt(0.2, 10.5));