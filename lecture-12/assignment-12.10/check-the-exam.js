/* Create a function that calculates student exam scores. The function should take 
three inputs:

1) file that contains the correct answers, separated by commas.

2) file that contains student answers, one student answers per line, individual answers
 separated by commas.

3) file where the scores will be written

You can use the following inputs in your answer: correct_answers.txt:

C,D,C,A,A,B,C,D,B,C,D,D,C,A,D,A,D,D,A,C

student_answers.txt:

D,A,A,A,B,C,D, ,A,C,D,B,A,C, ,C,C,A,B,D
A,D,A,A, ,A,C,D,D,D,D,D,D,A,B,B,C,A,C,B
B,C,A,C, ,A,B,D,D,B,D,B,A,A,C,D,D,B,A,B
A,C,A,D,C,C, , , , ,B,C,C,B,D,C,B,A,D,A
D,B,D,D,B,C,C,B,A,D,D, ,A,D,B,A,B,A,C,A
D,B,C,B,A,D,C,D,D,B,A,A,B,A,A,A,A,D,D,B
A,C,B,D,B,D,C,D,D, ,D,B,D,A,D,D,B,B,C,C
B,D,B,B,D, ,B,B,C,D,A,D,C,C,B,C,C,B,A,C
B,A,C,D,C, ,A,A, ,C,D B,B, ,A,D, ,D,B,D
C,A,D,A,A,D,C,D,C,A,A,D,C,A,A,B,A,C,C,C

The function calculates the scores for each individual student giving ** +4 
 for each correct answer**, -1 for each incorrect answer, and +0 for each blank answer,
 represented as space. If the score is lower than zero, the function returns zero. 
 Then the function writes the student score to the output file, one student score per line.

If using the above inputs, the output should be

0
16
6
0
0
15
11
6
4
25 */

// NOTE: A comma missing in student_answers at row 9! Added manually.

import fs from "fs";

const correctAnswers = fs.readFileSync('correct_answers.txt', 'utf8').trim().split(",");
const studentAnswers = fs.readFileSync('student_answers.txt', 'utf8').trim().split("\n");

for (const studentAnswer of studentAnswers) {
  const answers = studentAnswer.split(",");
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === " ") {
      score += 0; // What's the point of adding 0?
    } else if (answers[i] === correctAnswers[i]) {
      score += 4;
    } else if (answers[i] !== correctAnswers[i]) {
      score -= 1;
    }
  }
  if (score < 0) {
    score = 0;
  }
  console.log(score);
}