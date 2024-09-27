let letter = "*";
for (let i = 1; i <= 10; i++) {
    console.log(letter.repeat(i));
}

console.log(" ");

let emptyOnes = 0;
let emptySpace = " ";
let n = 18; // Number of letters on a row
for (let i = 1; i <= 10; i++) {
    emptyOnes = Math.round((n-(i*2 - 1))/2);
    console.log(emptySpace.repeat(emptyOnes)+letter.repeat(i*2 - 1)+emptySpace.repeat(emptyOnes));
}

console.log(" ");

emptyOnes = 0;

n = 11;
for (let i = 1; i <= 5; i++) {
    emptyOnes = Math.round((n-(i*2 - 1))/2);
    console.log(emptySpace.repeat(emptyOnes)+letter.repeat(i*2 - 1)+emptySpace.repeat(emptyOnes));
}
console.log(letter.repeat(11));
for (let i = 5; i >= 1; i--) {
    emptyOnes = Math.round((n-(i*2 - 1))/2);
    console.log(emptySpace.repeat(emptyOnes)+letter.repeat(i*2 - 1)+emptySpace.repeat(emptyOnes));
}