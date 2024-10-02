/* Create a function sentencify that takes in an array of words
  and a start array index.

The function must recursively build the given words, starting from the given index,
into a sentence where each word is separated by a space. The sentence ends
  in an exclamation mark.

Example:

const wordArray = [ "The", "quick", "silver", "wolf" ];
console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!" */

const wordArray = [ "The", "quick", "silver", "wolf" ];

function sentencify(wordArray, startIndex) {
  let ret = "";
  wordArray.map((word, mapIndex) => {
    if (mapIndex >= startIndex) {
      if (mapIndex === (wordArray.length - 1)) {
        ret += word + "!";
      } else {
        ret += word + " ";
      }
    }
  })
  return ret;
}

console.log("");
console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!" */