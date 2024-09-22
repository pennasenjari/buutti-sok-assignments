/* Write a program that has four values: lastName, age, isDoctor, sender.
The name parameters should be strings, age a number and isDoctor a boolean.

Your program should output the following text:
Dear <TITLE> <LAST_NAME>
Congratulations on your <NEXT_AGE> birthday! Many happy returns!
Sincerely,
<SENDER>

The <LAST_NAME> and <SENDER> should correspond to their variables.
The <TITLE> should be "Dr." if the recipient is a doctor, and "Mx." if they are not.
The value <NEXT_AGE> should be a string that consists of two parts:

A number one larger than the current age
"st" if the number ends in one, "nd" if the number ends in 2,
"rd" if the number ends in 3, and "th" in all other cases.
So for example if the age is 40, then the ´<NEXT_AGE>`should be "41st". */

const lastName = "Trump";
const age = 90;
const nextAge = age + 1;
const lastDigit = nextAge % 10;
const isDoctor = false;
const sender = "Mrs. Harris";
let title = "Mx.";
let suffix = "th";

if (isDoctor) {
  title = "Dr.";
}

if (lastDigit === 1) {
  suffix = "st";
} else if (lastDigit === 2) {
  suffix = "nd";
} else if (lastDigit === 3) {
  suffix = "rd";
}

console.log(`Dear ${title} ${lastName}
Congratulations on your ${nextAge}${suffix} birthday! Many happy returns!
Sincerely,
${sender}`);

