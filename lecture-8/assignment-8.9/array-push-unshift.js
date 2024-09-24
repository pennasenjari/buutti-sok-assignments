/* Copy the previous code and use it as a base. Modifying the array, 
use the push method to add the words “over”, “lazy” and “dog” to the end of the array.

Print the array afterwards to make sure the array looks as expected.

Afterwards, use the unshift method to add the element “pangram:” to the
beginning of the array. */


const arr = ['the', 'quick', 'brown', 'fox'];
console.log(arr);

arr[2] = "gray";
console.log("");
console.log(arr[2]);

arr.push();
arr.push("over", "lazy", "dog");
console.log("");
console.log(arr);

arr.unshift("pangram:");
console.log("");
console.log(arr);