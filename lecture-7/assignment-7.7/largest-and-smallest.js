/* Create a program that has three variables for three numbers:
number1, number2, and number3. Decide their values freely.

Use conditional(s) to accomplish the following:

find the largest number and print it
find the smallest number and print it
if they're all equal, print that out */

/* Potential cases:
- all numbers are equal
- all numbers are different
- 1st and 2nd are equal and 3rd not
- 1st and 3rd are equal and 2nd not
- 2nd and 3rd are equal and 1st not
*/

const first = 2;
const second = 1;
const third = 2;

console.log(`The numbers are ${first}, ${second} and ${third}.`);

// case 1: all numbers are same
if (first === second && first === third) {
  console.log("Numbers are equal.")

// case 2: all numbers are different
} else if (first !== second && first !== third && second !== third) {

    // find the smallest number
    if (first < second && first < third) {
      console.log("First number is smallest.")
    } else if (second < first && second < third) {
      console.log("Second number is smallest.")
    } else {
      // The last avaiable option
      console.log("Third number is smallest.")
    }
  
    // find the largest number
    if (first > second && first > third) {
      console.log("First number is largest.")
    } else if (second > first && second > third) {
      console.log("Second number is largest.")
    } else {
      // The last available option
      console.log("Third number is largest.")
    }

// Case 3: two numbers are same and one is different
} else {

  // Case 3.1: first and second number are equal
  if (first === second) {
    if (first > third) {
      console.log("First and second numbers are larger than third.")
    } else {
      console.log("First and second numbers are smaller than third.")
    }

  // Case 3.2: first and third number are equal
  } else if (first === third) {
    if (first > second) {
      console.log("First and third numbers are larger than second.")
    } else {
      console.log("First and third numbers are smaller than second.")
    }

  // Case 3.3: second and third number are equal
  } else if (second === third) {
    if (second > first) {
      console.log("Second and third numbers are larger than first.")
    } else {
      console.log("Second and third numbers are smaller than first.")
    }
  }
}