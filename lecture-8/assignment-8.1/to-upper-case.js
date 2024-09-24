/* Write a function that takes one string parameter.

The function should use the string method .toUpperCase() to
  first convert the string to upper case, and then print the string. */

function toUp(str) {
  str = str.toUpperCase();
  console.log(str);  
}

toUp("hello");