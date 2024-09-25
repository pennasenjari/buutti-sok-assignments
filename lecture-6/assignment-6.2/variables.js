/* 
Define two variables with some values using the let keyword and print 
  the variables to the console using console.log().
What will be printed if you don’t assign a value to a variable at all?
Change the values of the variables in the lines after the console.log()
  and print out the variables again.
Change one of the variable definitions to use const keyword.
What happens when you try to change the value of the constant variable? */

const hello1 = "Hello 1";
let hello2;

console.log(hello1);
console.log(hello2); // undefined

hello1 = "Hello 1 edited"; // TypeError: Assignment to constant variable.

