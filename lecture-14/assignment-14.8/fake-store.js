/* In this assignment, we make use of the Fake Store API: https://fakestoreapi.com/docs
a) Create a function named getFakeStoreProducts() that fetches all products from the
 Fake Store API (https://fakestoreapi.com/products) and prints the names of the products.

getFakeStoreProducts();
// prints:
// Mens Casual Premium Slim Fit T-Shirts
// Mens Cotton Jacket
// Mens Casual Slim Fit
// John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
// Solid Gold Petite Micropave
// White Gold Plated Princess
// ...
// etc

b) Check the Fake Store documentation on how to "add" a new product to the store.
Then, create a function named addFakeStoreProduct that takes 4 parameters: name,
 price, description and category.
The function should POST the product information to the Fake Store API products endpoint
 (https://fakestoreapi.com/products) and then print the ID of the added product.
If you made your request successfully, the Fake Store API endpoint will return you
 the ID of your new product. (Note that no new products are actually created to the
 Fake Store backend, so you won't see your new product in the product list 
 if you fetch it afterwards)

c) Check the Fake Store documentation on how to "delete" a product from the store.
Then, create a function deleteFakeStoreProduct that takes the product's ID as a parameter.
The function should make a DELETE request to the Fake Store API products endpoint with
 the given product ID.
If successful, the Fake Store API returns the deleted product. 
Print the name of the product that was deleted. */

import axios from "axios";

// a) get products and print names
async function getFakeStoreProducts() {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
console.log("\nAll available products:\n")
// fakeProducts also in assignment c)
const fakeProducts = await getFakeStoreProducts().then((products) => { 
  for (let product of products) {
    console.log(product.title)
  }
  return products;
});


// b) add product
async function addFakeStoreProduct(title, price, description, category) {
  try {
    const res2 = await axios.post('https://fakestoreapi.com/products',{
      title: title,
      price: price,
      description: description,
      category: category
    });
    return `Ádded. id: ${res2.data.id}`;
  } catch(error) {
    return error;
  }
}
const title = "Leikkikalu";
const price = 45;
const description = "Lorem Ipsum, dolor sit amet";
const category = "lelut";
console.log(`\nAdd product ${title}`)
console.log(await addFakeStoreProduct(title, price, description, category));

// c) delete product
async function deleteFakeStoreProduct(id) {
  try {
    const res3 = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    return `Deleted product ${res3.data.title}`;
  } catch(error) {
    return error;
  }
}
console.log(`\nDeleting product with id ${fakeProducts[0].id}`)
console.log(await deleteFakeStoreProduct(fakeProducts[0].id)); // fakeProducts from a)

