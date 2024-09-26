/* Create the following array:

[5, 7, 2, 9, 3, 13, 15, 6, 17, 24]
Go through the array and print all numbers that are divisible by 3.

Use for..in
Use for..of */

const arr = [5, 7, 2, 9, 3, 13, 15, 6, 17, 24];

for (const index in arr) {
  if (arr[index] % 3 === 0) {
    console.log(arr[index]);
  }
}
console.log("");

for (const index of arr) {
  if (index % 3 === 0) {
    console.log(index);
  }
}
