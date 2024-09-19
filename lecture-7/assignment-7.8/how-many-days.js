/* Create a program that has a variable representing the number of a month.
(1 = January, 2 = February and so on)
The program should print how many days there are in the given month.
Do it using an if-else if... structure.
EXTRA: Do this task with a switch-case instead of an if-else structure. */

let month = 2;

if (month === 1) {
  console.log("There are 31 days in January");
} else if (month === 2) {
  console.log("There are 28 or 29 days in February");
} else if (month === 3) {
  console.log("There are 31 days in March");
} else if (month === 4) {
  console.log("There are 30 days in April");
} else if (month === 5) {
  console.log("There are 31 days in May");
} else if (month === 6) {
  console.log("There are 30 days in June");
} else if (month === 7) {
  console.log("There are 31 days in July");
} else if (month === 8) {
  console.log("There are 31 days in August");
} else if (month === 9) {
  console.log("There are 30 days in September");
} else if (month === 10) {
  console.log("There are 31 days in October");
} else if (month === 11) {
  console.log("There are 30 days in November");
} else if (month === 12) {
  console.log("There are 31 days in December");
}

// Extra
month = 11;

switch (month) {
  case 1:
    console.log("There are 31 days in January");
    break;
  case 2:
    console.log("There are 28 or 29 days in February");
    break;
  case 3:
    console.log("There are 31 days in March");
    break;
  case 4:
    console.log("There are 30 days in April");
    break;
  case 5:
    console.log("There are 31 days in May");
    break;
  case 6:
    console.log("There are 30 days in June");
    break;
  case 7:
    console.log("There are 31 days in July");
    break;
  case 8:
    console.log("There are 31 days in August");
    break;
  case 9:
    console.log("There are 30 days in September");
    break;
  case 10:
    console.log("There are 31 days in October");
    break;
  case 11:
    console.log("There are 30 days in November");
    break;
  case 12:
    console.log("There are 31 days in December");
    break;
  default:
    console.log("Invalid month");
}

// My own extra...
console.log("\nAmount of days in each month:\n");
for (i = 0; i < 12; i++) {
  // get last day of month as a date object
  const lastDateOfMonth = new Date(2024, i + 1, 0);
  const month = lastDateOfMonth.toLocaleString('default', { month: 'long' });
  const lastDay = lastDateOfMonth.getDate();
  console.log(`${month} has ${lastDay} days.`);
}
