/* EXTRA
Create a program that finds out the smallest number that has a factorial 
  that is divisible by 600.

Print the number.

Do not pre-calculate the answer, but use an infinite loop to find the number 
  and use the break statement to stop the loop once the number has been found.

(Technically this is also doable without using break or an infinite loop, 
  but we don’t yet have enough knowledge of JS so it’d be difficult to make a task 
  where break is absolutely necessary) */

const nbr = 600;
let i = 1;
let result = 1;
while (true) { // infinite loop
  result *= i;
  if (result % nbr === 0) {
    console.log(`The smallest number having factorial divisible by ${nbr} is ${i}`);
    break;
  }
  i++;
}

