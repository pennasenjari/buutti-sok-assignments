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

// Non-recursive version
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

console.log(`\nSentencify without recursion:`);
console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!" */

// Recursive version
let ret = "";
function sentencify2(wordArray, startIndex, recur = false) {

  if (recur === false) {
    // clear the return value on 1st call
    ret = "";
  }

  if (startIndex < wordArray.length - 1) {
    ret += wordArray[startIndex] + " ";
    startIndex++;
    sentencify2(wordArray, startIndex, true); // true = recursion
  } else {
    ret += wordArray[startIndex] + "!";
  }
  return ret;
}

console.log(`\nSentencify with recursion:`);
console.log(sentencify2(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify2(wordArray, 1)); // prints "quick silver wolf!" */