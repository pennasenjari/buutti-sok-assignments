/* Look at the code on the right. 
What do you think it prints, i.e. what is the value of count after the program finishes?

Run the program. Were you correct?

Explain why the count behaves as it does. */

const myArray = ["3", "2", "1", "0", ""];
let count = 0;
for (let i = 0; i < myArray.length; i++) {
    if (i) {
        count++;
    }
    if (myArray[i]) {
        count--;
    }
}
console.log(count);

/* i gets value from for loop and it is always number -> truthy
item "0" in array is string -> truthy
if (myArray[i]) check if the value is assigned, so "" -> truthy */