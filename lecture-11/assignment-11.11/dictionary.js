/* You're programming a simple English-to-Finnish dictionary that allows the user to 
translate individual words. 
For a test version, our dictionary has the following translations:

hello: "hei"
world: "maailma",
bit: "bitti",
byte: "tavu",
integer: "kokonaisluku",
boolean: "totuusarvo",
string: "merkkijono",
network: "verkko"

a) Create an object that holds the translations above.

b) Create a function printTranslatableWords that prints a list of all the words that 
the program is able to translate.

Call your function to make sure it works as intended.

Hint: Object.keys. For example:

const obj = { a: 2, b: 5, text: "hello, I am an example" };
console.log(Object.keys(obj)); // prints [ "a", "b", "text" ]
c) Create a function translate that takes a word (in English) as a parameter and returns 
the corresponding word in Finnish.

Call your function with a few different words and print the return values. For example:

console.log(translate("network")); // prints "verkko"
d) Modify the translate function so that if the given word does not exist in the dictionary, 
it prints "No translation exists for word word given as the argument" and returns null.

Call the function with some word that isn't translated to make sure it works as intended. */

// a)
const translations = {
  "hello": "hei",
  "world": "maailma",
  "bit": "bitti",
  "byte": "tavu",
  "integer": "kokonaisluku",
  "boolean": "totuusarvo",
  "string": "merkkijono",
  "network": "verkko"
};

// b)
function printTranslatableWords() {
  console.log(Object.keys(translations));
}
console.log(`\nTranslatable words are:`);
printTranslatableWords();

// c) & d)
function translate(word) {
  if (word in translations) {
    return translations[word];
  } else {
    console.log("No translation exists for word word given as the argument");
    return null;
  }
}

// c)
console.log(`\nFew translations:`);
const toTranslate =["hello","world","network","byte"];
for (word of toTranslate) {
  console.log(`${word} = ${translate(word)}`);
}

// d)
console.log(`\nAdded support for non-existing translations:`);
const toTranslate2 =["hello","finland","weather","byte"];
for (word of toTranslate2) {
  console.log(`${word} = ${translate(word)}`);
}
