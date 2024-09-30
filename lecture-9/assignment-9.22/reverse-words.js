/* Create a function reverseWords that reverses each word in a string,
  but does not reverse the order of the words in the string.

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes" */

const sentence = "this is a short sentence";
console.log(`Original sentence: ${sentence}`);

function reverseWords(sentence) {
  const words = sentence.split(" "); // turn sentence into words array
  for (i = 0; i  < words.length; i++) {
    let chars = words[i].split(""); // turn word into characters array
    let newWord = "";
    for (let j = chars.length - 1; j >= 0; j--) { // loop characters backwards
      newWord += chars[j];
    }
    words[i] = newWord;
  }
  return words.join(" "); // combine words array back to string
}

console.log(`Sentence with reversed words: ${reverseWords(sentence)}`);