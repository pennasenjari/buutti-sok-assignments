/* Look at the code on the right. 
What do you think it prints, i.e. what is the value of count after the program finishes?
Run the program. Were you correct?
Explain why the count behaves as it does. */

const myArray = ["3", "2", "1", "0", ""];
let count = 0;
for (let i = 0; i < myArray.length; i++) {
  if (i) {
    console.log(i)
    count++;
  }
  if (myArray[i]) {
    count--;
  }
}
console.log(count);

/* i gets value from for loop and it is number and always truthy
if (myArray[i]) check if the value is in that index is assigned, 
so also the last element "" is truthy 
So, in every iteration, count is both incremented 
and decremented and the result is 0.
*/