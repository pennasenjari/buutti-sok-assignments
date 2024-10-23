/* We have an array:

[
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "Fortune favors the brave."
]

Create a new array that contains the number of words in each sentence.
Create a new array that contains each sentence reversed (i.e., 
  the words in reverse order but the words themselves are not reversed). */

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "Fortune favors the brave."
];

console.log(`\nSentences:`);
for (let sentence of sentences) {
  console.log(sentence);
}

const numberOfWords = sentences.map(sentence => sentence.split(" ").length);
console.log(`\nNumber of words / sentence: ${numberOfWords.toString()}`);

const reversedWords = sentences.map(sentence => sentence.split(" ").reverse().join(" "));
console.log(`\nReversed sentences:`);
for (let sentence of reversedWords) {
  console.log(sentence);
}