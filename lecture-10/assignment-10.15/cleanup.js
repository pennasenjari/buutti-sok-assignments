/* const objectArray = [ 
    { x: 14, y: 21, type: "tree", toDelete: false },
    { x: 1, y: 30, type: "house", toDelete: false },
    { x: 22, y: 10, type: "tree", toDelete: true },
    { x: 5, y: 34, type: "rock", toDelete: true },
    null,
    { x: 19, y: 40, type: "tree", toDelete: false },
    { x: 35, y: 35, type: "house", toDelete: false },
    { x: 19, y: 40, type: "tree", toDelete: true },
    { x: 24, y: 31, type: "rock", toDelete: false } 
];
There are some entries in the above array that are marked to be deleted.

a) Erase the entries by finding them and setting them to null. 
Do not replace the original array, but modify it instead.

b) Erase the entries by generating a new array with Array.map where the objects
  to be deleted have been replaced with null and the rest stay as-is.

c) Imagine that instead of 9 entries, the above array would have 100,000 entries. 
What would be the implications for performance and memory use between doing it 
  like in a) or like in b)?

To answer this question, write a comment to your source where you present 
  your thoughts on the subject. */

const objectArray = [ 
    { x: 14, y: 21, type: "tree", toDelete: false },
    { x: 1, y: 30, type: "house", toDelete: false },
    { x: 22, y: 10, type: "tree", toDelete: true },
    { x: 5, y: 34, type: "rock", toDelete: true },
    null,
    { x: 19, y: 40, type: "tree", toDelete: false },
    { x: 35, y: 35, type: "house", toDelete: false },
    { x: 19, y: 40, type: "tree", toDelete: true },
    { x: 24, y: 31, type: "rock", toDelete: false } 
];


// a) Modify array
for (obj of objectArray) {
  if (obj !== null && obj.toDelete === true) {
    objectArray.splice(objectArray.indexOf(obj), 1, null); // mutate the original array
  }
}
console.log(objectArray);

// b) Copy array
const newArray = objectArray.map(obj => {
  if (obj !== null && obj.toDelete === true) {  // check against null to avoid error
    return null;
  }
  return obj;
});
console.log(newArray);

/* c) Didn't do any time-consuming testing here. Instead, asked ChatGPT: 
---
map() will typically be slower if you do not need to create a new array because
 it allocates memory and creates a new array while applying the function to each element.
for...of is faster for simple iteration and mutation because it avoids the extra
  overhead of creating a new array.
...
  map(): Uses more memory because it creates a new array, leading to duplicated data if 
  the original array remains in memory. The memory footprint grows in proportion 
  to the size of the array.
for...of: Uses less memory because it operates directly on the original array and
  does not create a copy unless you explicitly do so.
---
My conclusion: For ... of is both faster and less memory consuming because 
  it does not make a copy of the array.
*/