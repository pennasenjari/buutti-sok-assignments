/* By using a single if conditional, write the following conditions:

The game of Hearts can only be played with 4 people (playerCount) 
Mark is happy when he is not stressed or if he has ice cream (isStressed, hasIceCream) 
It is a beach day if the sun is shining, it is not raining and 
  the temperature is 20 degrees Celsius or above 
Arin is happy if he sees either Suzy or Dan on Tuesday night. 
  However, seeing them both at the same time, or being alone, makes him sad. */

// A)
const playerCount = 4;

if (playerCount === 4) {
  console.log("Can play.");
} else {
  console.log("Can not play.");
}

// B)
const isStressed = false;
const hasIceCream = true;

if (!isStressed || hasIceCream) {
  console.log("Mark is happy :-)");
} else {
  console.log("Mark is unhappy :-(");
}

// C)
const isShining = true;
const isRaining = false;
const temperature = 30;

if (isShining && !isRaining && temperature >= 20) {
  console.log("It's a beach day !!!");
} else {
  console.log("Don't go to beach today-")
}

// D)
const isTuesday = true;
const isSeeingSuzy = false;
const isSeeingDan = true;

if (isTuesday 
&& (isSeeingSuzy || isSeeingDan) 
&& !(isSeeingSuzy && isSeeingDan)) {
  console.log("Arin is happy :-)");
} else {
  console.log("Arin is sad :-(");
}