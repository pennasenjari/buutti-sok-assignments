/* We have an array: 

[2, 5, 8, 10, 13, 17, 20]

Create a new array that contains the square of each number.
Create a new array that contains the string "Even" if the number is even  and
  "Odd" if the number is odd. */

  const numbers = [2, 5, 8, 10, 13, 17, 20];
  console.log(`Numbers: ${numbers.toString()}`);
  
  const squares = numbers.map(number => number * number);
  console.log(`Squares: ${squares.toString()}`);
  
  const evenOdd = numbers.map(number => number % 2 === 0);
  console.log(`Even or odd: ${evenOdd.toString()}`);
  