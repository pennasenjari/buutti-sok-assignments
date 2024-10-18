const students = [ 
  { name: "Sami", score: 24.75 },
  { name: "Heidi", score: 20.25 },
  { name: "Jyrki", score: 27.5 },
  { name: "Helinä", score: 26.0 },
  { name: "Maria", score: 17.0 },
  { name: "Yrjö", score: 14.5  } 
];

const studentsBox = document.getElementById("studentsBox");
document.getElementById("toggle").addEventListener("click", () => {
  if (studentsBox.childElementCount > 0) {
    // Remove students table
    studentsBox.innerHTML = "";
  } else {
    // Create studens table
    let table = document.createElement('table');
    for (let student of students) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      td1.innerHTML = student.name;
      tr.appendChild(td1);
      td2.innerHTML = student.score;
      tr.appendChild(td2);
      table.appendChild(tr);
    }
    studentsBox.appendChild(table);
  }
})