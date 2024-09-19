/* Create a program that checks if a student has passed a test or not.
Include a variable with a score between 1 to 5.
Using switch statement, printout the final grade of the score.
The score needs at least 2 to pass the test, otherwise the result is failed.
Score of 2 is considered passed, 3 is good, 4 is very good and 5 is excellent. */

const score = 1;

switch (score) {
  case 1:
    console.log("failed!");
    break;
  case 2:
    console.log("Passed");
    break;
  case 3: 
    console.log("Good");
    break;
  case 4:
    console.log("Very good!");
    break;
  case 5:
    console.log("Excellent!");
    break;
  default:
    console.log("Invalid number! Valid numbers are 1, 2, 3, 4 or 5.");
    break;
} 