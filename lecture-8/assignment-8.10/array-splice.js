/* After the previous tasks, our array should look like this:

[ "pangram:", "the",  "quick", "gray", "fox", "over", "lazy", "dog" ]
It is still missing two words.

Use the splice method to add a new element, “jump”, between “fox” and “over”.
Also add “the” between “over” and “lazy”. */

const arr = [ "pangram:", "the",  "quick", "gray", "fox", "over", "lazy", "dog" ];

arr.splice(5, 0, "jump"); // Add to index 5. 0 = do not remove anything
arr.splice(7, 0, "the");
console.log(arr)