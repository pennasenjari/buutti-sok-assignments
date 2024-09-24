/* "According to all known laws of aviation, there is no way a bee should be able to fly."
Using this string, do the following with string methods:

Check if the string has a given substring, for example “all”
Check if the string starts with a given substring, for example “Acco”
Check if the string ends with a given substring, for example “Acco”
Take a substring from string, for example everything from index 20 until the end
Using split, create an array using a space “ “ as a delimiter
Replace a substring with another one. For example replace “bee” with “elephant”
Replace a lowercase letter with an uppercase one, for example replace “a” with “A” */

const str = "According to all known laws of aviation, there is no way a bee should be able to fly.";

/* Check if the string has a given substring, for example “all” */
console.log(str.includes("all"));  // true

/* Check if the string starts with a given substring, for example “Acco” */
console.log(str.startsWith("Acco"));  // true

/* Check if the string ends with a given substring, for example “Acco” */
console.log(str.endsWith("Acco"));  // true

/* Take a substring from string, for example everything from index 20 until the end */
console.log(str.substring(20));  // there is no way a bee should be able to fly.

/* Using split, create an array using a space “ “ as a delimiter */
console.log(str.split(" "));  // [ 'According', 'to', 'all', 'known', 'laws', 'of', 'aviation,', 'there', 'is', 'no', 'way', 'a', 'bee', 'should', 'be', 'able', 'to', 'fly.' ]  

/* Replace a substring with another one. For example replace “bee” with “elephant” */
console.log(str.replace("bee", "elephant"));  // According to all known laws of aviation, there is no way a elephant should be able to fly.

/* Replace a lowercase letter with an uppercase one, for example replace “a” with “A” */
// Note: replaces only first occurrence of "a"
console.log(str.replace("a", "A"));  // According to all known laws of aviation, there is no way A bee should be able to fly.

// In modern browsers also replaceAll() which replaces all occurrences
console.log(str.replaceAll("a", "A"));  // According to All known lAws of AviAtion, there is no wAy A bee should be Able to fly.
