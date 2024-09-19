/* You've bought a bag with 100 pieces of candy to share with your colleagues.
There are 5 people to share with, in addition to yourself.

Calculate and print out how many pieces of candy each employee gets.

EXTRA: Because you can't evenly split 100 candy among all six people,
you decide to keep the extra ones to yourself, using the inconvenience of
having needed to buy the candy as an excuse. Using the modulus operator %,
calculate and print out how many extra candy you got from this. 
Also, reduce this candy from the total count before doing the original division. */

const candyBagSize = 100;
const people = 5 + 1; // Others + me
let share = candyBagSize / people;
console.log(`When shared evenly, each person gets ${share.toFixed(1)} candy.`);

// Extra
const extraCandy = candyBagSize % people;
console.log(`There are ${extraCandy} candy extra which I get :-).`)
share = (candyBagSize - extraCandy) / people;
const myShare = share + extraCandy;
console.log(`Now I get ${myShare} candy and others get ${share}.`);