/* Create a program with 3 variables representing names.
Print out the names, ordered so that the longest name is first.

For example, if the names were Maria, Joe and Philippa,
the program would print Philippa Maria Joe.

In this case you'll probably want to use a property called length
to determine the length of the names. For example:

const firstName = "Maria";
const secondName = "Joe";

const firstNameLength = firstName.length; // 5
const secondNameLength = secondName.length; // 3
You can use separate variables for the lengths or use the length property
  in the if conditions:

if (firstName.length > secondName.length) {
    ...
} */

const name1 = "Sari";
const name2 = "Kari";
const name3 = "Marita";

const name1Len = name1.length;
const name2Len = name2.length;
const name3Len = name3.length;

// default order, which is used in a case of equal length
let first = name1;
let second = name2;
let third = name3;

console.log(`Names unordered: ${name1} ${name2} ${name3}`)

// Case 1: Name 1 is the longest
if (name1Len > name2Len && name1Len > name3Len) {
  first = name1;
  // Check which of the remaining names is longer
  if (name2Len > name3Len) {
    second = name2;
    third = name3;
  } else {
    second = name3;
    third = name2;
  }
// Case 2: name 2 is the longest
} else if (name2Len > name1Len && name2Len > name3Len) {
  first = name2;
  // Check which of the remaining names is longer
  if (name1Len > name3Len) {
    second = name1;
    third = name3;
  } else {
    second = name3;
    third = name1;
  }
// Case 3: name 3 is the longest
} else if (name3Len > name1Len && name3Len > name2Len) {
  first = name3;
  // Check which of the remaining names is longer
  if (name1Len > name2Len) {
    second = name1;
    third = name2;
  } else {
    second = name2;3
    third = name1;
  }
}

console.log(`Names ordered, longest first: ${first} ${second} ${third}`)
