/* Using the same two numbers as in the previous task, 
make your program print out which one is larger (just like our example).
However, if the numbers are equal, make the program print “a and b are equal” instead! */

const a = 3;
const b = 12;

if (typeof(a) === "number" && typeof(b) === "number") {
  if (a > b) {
    console.log("a is larger");
  } else if (b > a) {
    if (b > a) console.log("b is larger");
  } else {
    if (a === b) console.log("a and b are equal");
  }
} else {
  console.log("Either a or b is not a number");
}
