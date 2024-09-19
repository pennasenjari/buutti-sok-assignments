/* Create variables for distance (kilometers) and speed (km/h), and give them some values.
Calculate and print out how many hours it takes to travel the distance at the given speed.

Extra: Express the time in hours and minutes instead of only hours.
For example, traveling 120 km at 50 km/h would take 2 hours 24 minutes. */

const distance = 100; // km
const speed = 90; // km/h
const travelTime = distance / speed; // h
console.log(`Travelling distance ${distance} km at speed of ${speed} km/h takes ${travelTime.toFixed(1)} hours.`);

// Extra
const hours = parseInt(travelTime);
const mins = (travelTime * 60) % 60; // travelTime * 60 = convert hours to minutes
console.log(`In other words, travelling takes ${hours} hours ${Math.round(mins)} minutes.`);