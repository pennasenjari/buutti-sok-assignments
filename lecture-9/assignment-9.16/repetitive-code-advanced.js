/* The following function counts how many vowels there are in the given 
  (English) sentence. However, it has some repetitive code that could be 
  simplified away by splitting some of the code into a helper function.

Do the following:

a) Identify the repetitive bit of code

b) Create a helper function that performs the repetitive bit of code and returns 
  a fitting value

c) Modify the checkSentenceVowels function so that it calls your helper function
  once for each vowel instead of having the same loop just copy-pasted 
  6 times for each vowel

The charAt function takes a letter of the string at the specified index. 
For example, for the string "abc", charAt(0) === 'a', chartAt(1) === 'b' 
  and charAt(2) === 'c'.

function checkSentenceVowels(sentence) {
  // Check how many different vowels we have in the sentence

  let countOfAs = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === "a") {
      countOfAs++;
    }
  }

  let countOfEs = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === "e") {
      countOfEs++;
    }
  }

  let countOfIs = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === "i") {
      countOfIs++;
    }
  }

  let countOfOs = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === "o") {
      countOfOs++;
    }
  }

  let countOfUs = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === "u") {
      countOfUs++;
    }
  }

  let countOfYs = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === "y") {
      countOfYs++;
    }
  }

  console.log("A letter count: " + countOfAs);
  console.log("E letter count: " + countOfEs);
  console.log("I letter count: " + countOfIs);
  console.log("O letter count: " + countOfOs);
  console.log("U letter count: " + countOfUs);
  console.log("Y letter count: " + countOfYs);

  const totalCount =
    countOfAs + countOfEs + countOfIs + countOfOs + countOfUs + countOfYs;

  console.log("Total vowel count: " + totalCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");

Extra: This still leaves some repetition to the code. Can you compact it even further? */

// A)
function countLetters(sentence, letter) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

function checkSentenceVowels(sentence) {
  // Check how many different vowels we have in the sentence

  const letters = ["a", "e", "i", "o", "u", "y"]
  let lettersTotal = 0;

  for (i = 0; i < letters.length; i++) {
    lettersTotal += countLetters(sentence, letters[i]);
  }

  return lettersTotal;
}

const sentence = "A wizard's job is to vex chumps quickly in fog.";
const totalVowels = checkSentenceVowels(sentence);
console.log(`\nThe sentence is:"${sentence}".`);
console.log(`The total vowel count in the sentence is ${totalVowels}.`);

// B)
function countLetters2(sentence) {

  const letters = ["a", "e", "i", "o", "u", "y"]
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (letters.includes(sentence.charAt(i).toLowerCase())) {
      count++;
    }
  }

  return count;
}

const sentence2 = "A wizard's job is to vex chumps quickly in forest.";
const totalVowels2 = countLetters2(sentence2);
console.log(`\nThe sentence is:"${sentence2}".`);
console.log(`The total vowel count in the sentence is ${totalVowels2}.`);