/* Write a program that reads Mary Shelley's "Frankenstein". 
https://www.gutenberg.org/cache/epub/84/pg84.txt
Then the program counts how many words the book has, and how many times the word
 "monster" is mentioned in the book. The program should then print out these numbers.

After printing this relevant information, it should make the book a bit more
 child friendly by replacing all the words "monster" with the word "puppy", 
 and writing the altered book to a new file. */
 
/* NOTE: Run in terminal: $node read-a-book.mjs
   Coderunner writes file in wrong location
   (where VS Code was started from) */

 import fs from "fs";

 fetch('https://www.gutenberg.org/cache/epub/84/pg84.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();  // Parse the response as text
  })
  .then(data => {
    const wordArr = data.split(" ");
    let wordCount = 0;
    let monsterCount = 0;
    for (let word of wordArr) {
      // count all words
      wordCount++;
      // count monsters
      if (word === "monster") {
        monsterCount++;
      }
    }
    console.log("Book \"Frankenstein\":", "Words:", wordCount, ", Monsters:", monsterCount);
    /* Use regexp in replace to find all occurrences of monster
       including "monsters". */
    const modifiedData = data.replace(/monster/g, "puppy"); 
    fs.writeFileSync("./frankenstein.txt", modifiedData, "utf-8");
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
 