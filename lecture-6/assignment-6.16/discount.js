/* Your local cashier has trouble taking discounts into account 
when charging for products.

To help them out, create two variables, price and discount. 
Give them some values, calculate the discounted price and print it to the console.

Extra: Make the discount into a multiplier. 
For example, with a price of 8 and a discount of 0.3 
(which we'd express as 30% in natural language), 
the final price would be 30% off 8 -> 5.6. 
To accomplish this, you need to think of the mathematical formula 
for converting the discount multiplier into a concrete discount sum 
and how to reduce it from the original price.

*/

const price = 8;
const discount = 0.3;
const result = price * (1 - discount);

console.log("Original price: " + price + " €");
console.log("Discount: " + discount);
console.log("New price: " + result.toFixed(2) + " €");

console.log(`\nIn other words, the original price was ${price} €,
discount was ${discount}, meaning ${100 * discount}% and the new price is ${result.toFixed(2)} €.`)