/* Given the following array of employee objects:

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
Use the array methods to create new arrays.

a) List the last names of all employees
b) List all employee objects that are Full Stack Residents
c) List all Instructors’ full names (e.g., “Wes Reid”) */

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

console.log("\nLast names of employees:");
const lastNames = users.map(user => user.lastName);
console.log(lastNames.toString());

console.log("\nEmployees that are Full Stack Residents:");
const fullStacResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStacResidents);

console.log("\nInstructors' full names:");
const instructorNames = users.filter(user => user.role === "Instructor").map(
  filteredUser => filteredUser.firstName + " " + filteredUser.lastName);
console.log(instructorNames);