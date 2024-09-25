/* Create a variable for the length of a side in a square.
Calculate and print out the area of a square with the given length of each side.
For example, a square with sides that are 5 meters long is 25 square meters in area.
Extra: Calculate the area with expnonentiation ** instead of multiplication *. */

const sideLen = 5; // m
let area = sideLen * sideLen;
console.log(`Square's side is ${sideLen} m and area is ${area} m2.` );

// Extra
area = sideLen ** 2;
console.log(`The area calculated with exponentiation is also ${area} m2.` );