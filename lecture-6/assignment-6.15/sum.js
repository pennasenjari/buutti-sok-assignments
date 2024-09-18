/* A store is rising the price of a product and is not sure of the result.

Create a program that calculates the result for them: have two variables, 
price and increase. Based on these, calculate the final price into a variable named result.

Print the values of all of these variables on their own lines, 
with fitting explanations. For example, "Original price: 6.5".

Extra: Print the whole calculation in a single line,
like <price> + <increase> = <result> */

const price = 11.50;
const increase = 10.1; // percent
const result = price * (1 + (increase / 100)); // display 2 decimals

console.log("Original price: " + price + " €");
console.log("Increase percentage: " + increase + "%");
console.log("New price: " + result.toFixed(2) + " €");
console.log(`\nIn other words, the original price was ${price} €,
increase percentage was ${increase} % and the new price is ${result.toFixed(2)} €.`)