/* You are teaching students of two classes on a course.
Students of the first class got grades of 9, 6 and 9.
Students of the second class got grades of 7, 10, and 5.
Create a program that
calculates the average grade of both classes
prints whether the first class got a higher average score than the second class */

const firstClassNumbers = [9, 6, 9];
const secondClassNumbers = [7, 10 , 5];

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const firstClassAverage = getAverage(firstClassNumbers);
const secondClassAverage = getAverage(secondClassNumbers);

console.log(`1st class's average is ${firstClassAverage.toFixed(1)}`);
console.log(`2nd class's average is ${secondClassAverage.toFixed(1)}`);

if (firstClassAverage > secondClassAverage) {
  console.log("1st class's average is higher.");
} else if (firstClassAverage === secondClassAverage) {
  console.log("1st and 2nd class's averages are equal.");
} else {
  console.log("2nd class's average is higher.");
}
