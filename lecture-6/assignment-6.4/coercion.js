/* In past slides we had an example of how automatic type conversion 
can lead to some unwanted or surprising results. 
In the example this piece of code was introduced:
const text3 = "monkeys " + 6 + 6; // “monkeys 66”

1) Why does “monkeys” + 6 + 6 result “monkeys 66” where as 6 + 6 + “monkeys” 
results in “12 monkeys”? 

- if the 1st var is text, result is text?
- if the 1st var is number, numbers are calculated as long as there is numbers?

2) Try to fix the example line above so that it would result “monkeys 12”. */

const text4 = "monkeys " + (6 + 6);
console.log(text4);
