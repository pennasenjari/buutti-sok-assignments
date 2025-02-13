/* Create a similar student object as on the previous slide.

Print the student.

Programmatically (without altering the original student object), 
  add a new course“Program Design” with a grade of 3 to the student.
  Print the student again.

Programmatically, change the grade of the “JavaScript Basics” course to 4.
Print the student once more. */

const student = {
  name: "Aili",
  credits: 45,
  courseGrades: {
      "Intro to Programming": 4,
      "JavaScript Basics": 3,
      "Functional Programming": 5
  }
}

console.log(student);
student.courseGrades["Program Design"] = 3;
console.log(student);
student.courseGrades["JavaScript Basics"] = 4;
console.log(student);