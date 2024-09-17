/* 
Define variables of fitting type to the following:
Is it raining?
Is it Saturday?
Is it day off from work?
Air temperature
Water temperature

Using if and else, determine if you would go swimming:
The circumstances for swimming are:
Not raining, Is Saturday, Is day off, air temperature is more than 25,
water temperature is more than 23

Test your program with various different values for these variables. 
*/

const isRain = false;
const isSaturday = true;
const isDayOff = false;
const airTemp = 30;
const waterTemp = 28;

/* 
// Basic solution
if (!isRain && isSaturday && isDayOff && airTemp > 25 && waterTemp > 23) {
  console.log("OK to swim today");
} else {
  console.log("Can't swim today");
}
*/

// Extended solution
let err = "";
if (isRain) err += "It's raining, no good for swim.\n";
if (!isSaturday) err += "You can only swim on Saturday!\n";
if (!isDayOff) err += "It's not holiday, you should be at work!\n";
if (airTemp <= 25) err += "Air is too cold for swimming.\n";
if (waterTemp <= 23) err += "Water is too cold for swimming.\n";

if (err.length > 0) {
  console.log(err);
} else {
  console.log("All OK to go to swim :-)")
}
