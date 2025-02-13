/* We're scoring game results with ranks of S, A, B, C, D and F, with S being 
best and F the worst.

We want to measure the overall performance of a player by converting these 
grades to numeric values in the following way:

S: 8
A: 6
B: 4
C: 3
D: 2
F: 0

a) Create a function calculateTotalScore that takes a sequence of grades 
(a string) and returns the total score (sum of grade scores) calculated from 
the sequence.

Instead of using a if-else or switch-case when looking up the score of a letter,
 use a look-up object. It'll make your code simpler.

Make sure that the following code works:

  const totalScore = calculateTotalScore("DFCBDABSB");
  console.log(totalScore); // prints 33
b) Create a function calculateAverageScore that takes a sequence of grades and 
returns the average score from the grades.

Average means total score divided by the number of grades. For example, 
if the sequence was ACD, the result would be (6 + 3 + 2) / 3.

Make sure that the following code works:

const averageScore = calculateAverageScore("DFCBDABSB");
console.log(averageScore); // prints 3.6666666666666665
EXTRA: In case you didn't do it already, make use of the calculateTotalScore 
function in your implementation of calculateAverageScore. If done correctly, 
you can make the body of calculateAverageScore only take 1 line of code!

c) We have the following array of grade sequences:

[ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ]
Use Array.map to convert this array into an array of average scores of 
the sequences. Print the resulting array. */

function calculateTotalScore(grades) {

  const scores = {"S": 8, "A": 6, "B": 4, "C": 3, "D": 2, "F": 0};

  let totalScore = 0;
  for (let i = 0; i < grades.length; i++) {
    totalScore += scores[grades[i]];
  }

  return totalScore;
}

function calculateAverageScore(grades) {
  // Extra
  return (calculateTotalScore(grades) / grades.length).toString();
}

// a)
const totalScore = calculateTotalScore("DFCBDABSB");
console.log(totalScore); // prints 33

// b)
const averageScore = calculateAverageScore("DFCBDABSB");
console.log(averageScore); // prints 3.6666666666666665

// c)
const scores = [ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ];
// prints [ '5.375', '1.9', '5.285714285714286', '3.4444444444444446' ]
console.log(scores.map((score) => calculateAverageScore(score)));