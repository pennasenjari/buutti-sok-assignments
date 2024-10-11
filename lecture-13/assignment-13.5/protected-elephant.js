/* Create a program that asks the user for a password. If the user answers correctly,
 the program shows this picture of an elephant from ASCII Art Archive. 

 If the user answers incorrectly, the program prints an error message and quits. */

import readline from 'readline';
import fs from 'fs';

const reader = readline.createInterface(process.stdin, process.stdout);

console.clear();
reader.question('Give password:', (answer) => {
  if (answer === 'elephant') {
    console.log(fs.readFileSync('elephant.txt','utf-8'));
  } else {
    console.log("Wrong password!");
  }
  reader.close()
})