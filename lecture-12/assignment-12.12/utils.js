import fs from 'fs';

function getStudents() {
  return JSON.parse(fs.readFileSync('register.json', 'utf-8'));
}

function saveStudents(students) {
  // if fs.writeFileSync() returns anything, it's an error
  return fs.writeFileSync('register.json', JSON.stringify(students, null, 2), 'utf-8');
}

// My own extra
function student(studentName) {
  const students = getStudents();
  return students.find(student => student.name === studentName);
}

function allStudents() {
  const students = getStudents();
  const studentNames = [];
  for (const student of students) {
    studentNames.push(student.name)
  }
  return studentNames;
}

function allCourses() {
  const students = getStudents();
  const courses = [];
  for (const student of students) {
    for (const course of student.courses) {
      if (!courses.includes(course.name)) {
        courses.push(course.name)
      }
    }
  }
  return courses;
}

function totalCredits() {
  const students = getStudents();
  let credits = 0;
  for (const student of students) {
    for (const course of student.courses) {
      credits += parseInt(course.credits);
    }
  }
  return credits;
}

function totalAverage() {
  const students = getStudents();
  let courses = 0;
  let grades = 0;
  let average = 0;
  for (const student of students) {
    for (const course of student.courses) {
      courses++;
      grades += parseInt(course.grade);
    }
  }
  if (courses > 0 && grades > 0) {
    average = grades / courses;
  }
  return average;
}

function addStudent(studentName) {

  // Check mandatory input
  if (studentName.length < 1) {
    return "Error: mandatory input missing";
  }
  
  // Ensure the student doesn't exist
  const students = getStudents();
  const student = students.find(student => student.name === studentName);
  if (student) {
    return "Error: student exists already";
  }

  // Add student
  students.push( {
    "name": studentName,
    "courses": []
  })
  if (saveStudents(students)) {
    // any response = error
    return "Error: Unable to save changes";
  } else {
    // OK
    return "Student " + studentName + " added";
  }

}

function addCourse(studentName, courseName, courseCredits, courseGrade) {

  // Check mandatory input
  if (!studentName || !courseName || !courseCredits || !courseGrade) {
    return "Error: mandatory input missing"
  }

  // Check that the student exists
  const students = getStudents();
  let student = students.find(student => student.name === studentName);
  if (!student) {
    return "Error: Student not found";
  }
  // Add course
  student.courses.push({
    "name": courseName,
    "credits": courseCredits,
    "grade": courseGrade
  })
  if (saveStudents(students)) {
    // any response = error
    return "Error: Unable to save changes";
  } else {
    // OK
    return "Course " + courseName + " added";
  }
}

function getAverage(studentName) {
  const students = getStudents();
  const student = students.find(student => student.name === studentName);
  if (!student) {
    return "Error: Student not found";
  }
  let courses = 0;
  let grades = 0;
  let average = 0;
  for (const course of student.courses) {
    courses++;
    grades += parseInt(course.grade);
  }
  if (courses > 0 && grades > 0) {
    average = grades / courses;
  }
  return average;
}

function getCredits(studentName) {
  const students = getStudents();
  const student = students.find(student => student.name === studentName);
  if (!student) {
    return "Error: Student not found";
  }
  let credits = 0;
  for (const course of student.courses) {
    credits += parseInt(course.credits);
  }
  return credits;
}

function setGrade(studentName, courseName, courseGrade) {

  // Check mandatory input
  if (!studentName || !courseName || !courseGrade) {
    return "Error: Mandatory input missing"
  }

  const students = getStudents();

  // Get the student
  const student = students.find(student => student.name === studentName);
  if (!student) {
    return "Error: Student not found"
  }
  const course = student.courses.find(course => course.name === courseName);
  if (!course) {
    return "Error: Course not found";
  }

  // Add course
  course["grade"] = courseGrade;
  if (saveStudents(students)) {
    // any response = error
    return "Error: Unable to save changes";
  } else {
    // OK
    return "Course " + courseName + " grade set.";
  }
}

function delCourse(studentName, courseName) {

  // Check mandatory input
  if (!studentName || !courseName) {
    return "Error: Mandatory input missing"
  }

  // Get the student
  const students = getStudents();
  const student = students.find(student => student.name === studentName);
  if (!student) {
    return "Error: Student not found";
  }
  const index = student.courses.findIndex(obj => obj.name === courseName);
  if (index === -1) {
    return "Error: course not found";
  }
  student.courses.splice(index, 1);
  if (saveStudents(students)) {
    // any response = error
    return "Error: Unable to save changes";
  } else {
    // OK
    return "Course " + courseName + " deleted.";
  }
}

function delStudent(studentName) {

  // Check mandatory input
  if (!studentName) {
    return "Error: Mandatory input missing"
  }

  // Get the student
  const students = getStudents();
  const index = students.findIndex(obj => obj.name === studentName);
  if (index === -1) {
    return "Error: Student not found";
  }
  students.splice(index, 1);
  if (saveStudents(students)) {
    // any response = error
    return "Error: Unable to save changes";
  } else {
    // OK
    return "Student " + studentName + " deleted.";
  }
}

export { student, allStudents, allCourses, totalCredits, totalAverage, addStudent, addCourse,
getAverage, getCredits, setGrade, delCourse, delStudent }