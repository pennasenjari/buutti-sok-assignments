/* Transform the student.courseGrades object into an array student.courses
  where each course is stored as an object
        {
            name: "Intro to Programming",
            grade: 3
        }
Print to console “Aili got 4 from Intro to Programming” by referring to
  the course data inside the courses array.
Hint: .find method can be useful! */

const student = {
  name: "Aili",
  credits: 45,
  courseGrades: {
      "Intro to Programming": 4,
      "JavaScript Basics": 3,
      "Functional Programming": 5
  }
}

console.log("\nStudent object:");
console.log(student);

student.courseGrades = [
  {"name": "Intro to Programming", "grade": 4},
  {"name": "Javascript Basics", "grade": 3},
  {"name": "Functional Programming", "grade": 5},
]

// Print to console “Aili got 4 from Intro to Programming”

const course = student.courseGrades.find(course => course.name === "Intro to Programming");
console.log(`\n${student.name} got ${course.grade} from ${course.name}.`);