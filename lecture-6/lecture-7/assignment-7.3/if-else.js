/* Create two boolean-type variables and give them some values.

Write a program that:

prints “both are true” in case both are true,
“first is true, second is false” in case only the first of them is true
“first is false, second is true” in case only the second of them is true
“both are false” in case neither is true */

const yes = true;
const no = false;

yes && no ? console.log("Both are true") : "";
yes && !no ? console.log("First is true, second is false") : "";
!yes && no ? console.log("First is false, second is true") : "";
!yes && !no ? console.log("Both are false") : "";
