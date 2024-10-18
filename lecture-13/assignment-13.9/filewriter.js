/* Write an app that first asks the user for a file name. Then it collects input line by
 line until the user enters input \q. At this point the program writes all the collected 
 input to a file, named whatever the user gave as the file name.

Extra: After writing out a file, the program asks "Would you like to write another file?
 (y/n)". If the user chooses "y", process repeats. If the user chooses "n", 
 the program ends. */

import fs from 'fs';
import readline from 'readline/promises'; // supports await

const reader = readline.createInterface(process.stdin, process.stdout);
let page = '';
let filename = '';
let answer = '';
let answer2 = '';

async function runWriter() {
  if (filename === '') {
    filename = await reader.question('Writing a text file. Give a filename:');
  }
  answer = await reader.question(`Write a line, or "q" to save your file:\n`); 
  if (answer === 'q') { // lazy to write \q...
    console.log(`Writing file ${filename}`);
    fs.writeFileSync(filename, page, 'utf-8');
    answer2 = await reader.question(`Would you like to write another file (y/n)?\n`);
    if (answer2 === 'y') {
      filename = '';
      page = '';
      runWriter()
    } else {
      console.log(`Bye bye!`);
      reader.close();
      return;
    }
  } else {
    page += answer + '\n';
    runWriter();
  }
}

console.clear();
runWriter();

