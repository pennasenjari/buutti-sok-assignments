/* Create a file register.json with the attached student register as its contents. 
Program an app that takes command line parameters and performs actions to the student
 register based on the command. The program should handle following commands

1) all students: The program lists the names of all the students in the register
2) all courses: The program lists the names of all the courses in the register. 
   The listing should not include doubles, so if several students have done the same course,
   the course still gets listed only once.
3) total credits: The program prints the total number of credits by all the students put
   together.
4) total average: The program prints the average grade of all the completed courses.
5) add student <student-name>: Adds a new student to the register. Will not accept empty input.
   Checks if the student already exists before adding, and if so, gives an error message.
6) add course <student-name> <course-name> <course-credits> <course-grade>: Adds a new course
   to a student. Checks for the existence of each of the parameters, and gives an error message
   if any are missing or invalid. Checks that the student exists, and gives an error message if
   student is not found. Can add multiple courses with same name.
7) Each operation reads the register.json file, and reads the data from there. 
   If the command makes changes to the file, the changes are written to the file,
   so they persist after the program shuts down.

Structure your app so that the functions that handle the register, are located in a separate
 file util.js, and the main program file handles the logic of handling the command line inputs.

Extra:
7) get average <student-name>: Prints the average grade of the given student.
8) get credits <student-name>: Prints the number of credits by a given student.
9) set grade <student-name> <course-name> <course-grade>: Sets the course grade to a new value.
   Checks all parameters and the existence of the course, and gives an error if anything 
   is wrong.
10) del course <student-name> <course-name>: Removes all the courses matching the given course
    name from the given student.
11) del student <student-name>: Removes given student.

Extra: Do this assignment so that your student register array is kept immutable. 
This means that after reading the data from the file to a variable, you are not allowed 
 to modify that variable in any way. */

import { student, allStudents, allCourses, totalCredits, totalAverage, addStudent,
addCourse, getAverage, getCredits, setGrade, delCourse, delStudent } from "./utils.js";
import readline from 'readline/promises'; // support await
const reader = readline.createInterface(process.stdin, process.stdout);

const commands = [
  "student",
  "all students",
  "all courses",
  "total credits",
  "total average",
  "add student",
  "add course",
  "get average",
  "get credits",
  "set grade",
  "del course",
  "del student",
  "help",
  "quit"
]

async function runCommand(command) {
  let studentName, courseName, courseCredits, courseGrade;  
  switch (command) {
    case "help":
      printCommands();
      break;
    case "student":
      // use replace() + regexp to add spaces after commas
      studentName = await reader.question("\nStudent name:");
      console.log(`\nStudent:`);
      console.log(student(studentName));
      break;
    case "all students":
      console.log(`\nAll students: ${(allStudents().toString()).replace(/,/g, ", ")}`);
      break;
    case "all courses":
      console.log(`\nAll courses: ${(allCourses().toString()).replace(/,/g, ", ")}`);
      break;
    case "total credits":
      console.log(`\nTotal credits: ${totalCredits()}`);
      break;
    case "total average":
      console.log(`\nTotal average: ${totalAverage().toFixed(1)}`); // display 1 decimal
      break;
    case "add student":
      studentName = await reader.question("\nStudent name:");
      console.log(`\n${addStudent(studentName)}`);
      break;
    case "add course":
      studentName = await reader.question("\nStudent name:");
      courseName = await reader.question("\nCourse name:");
      courseCredits = await reader.question("\nCourse credits:");
      courseGrade = await reader.question("\nCourse grade:");
      console.log(`\n${addCourse(studentName, courseName, courseCredits, courseGrade)}`);
      break;
    case "get average":
      // Extra
      studentName = await reader.question("\nStudent name:");
      console.log(`\nAverage grade of ${studentName} is: ${getAverage(studentName).toFixed(1)}`);    
      break;
    case "get credits":
      // Extra
      studentName = await reader.question("\nStudent name:");
      console.log(`\nCredits of ${studentName} are: ${getCredits(studentName)}`);    
      break;
    case "set grade":
      // Extra
      studentName = await reader.question("\nStudent name:");
      courseName = await reader.question("\nCourse name:");
      courseGrade = await reader.question("\nCourse grade:");
      console.log(`\n${setGrade(studentName, courseName, courseGrade)}`);    
      break;
    case "del course":
      // Extra
      studentName = await reader.question("\nStudent name:");
      courseName = await reader.question("\nCourse name:");
      console.log(`\n${delCourse(studentName, courseName)}`);    
      break;
    case "del student":
      // Extra
      studentName = await reader.question("\nStudent name:");
      console.log(`\n${delStudent(studentName)}`);
      break;
    default:
      console.log("Error: Unknown command");
      break;  
  }
  runRegister();
}

function printCommands() {
  console.log("\nAvailable commands:\n");
  console.log(commands.join("\n"));
}

async function runRegister() {
  const command = await reader.question("\nGive a command:");
  if (command === "quit") {
    reader.close();
    console.log("Bye bye!");
    return;
  }
  runCommand(command);
  runRegister(); // loop questions until user ends the prorgram
}

function main() {
  console.clear();
  console.log("\nWelcome to student register!")
  printCommands();
  runRegister();
}

main();