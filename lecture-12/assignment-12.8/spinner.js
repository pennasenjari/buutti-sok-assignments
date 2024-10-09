/* Using nodemon to help your development, create a spinner program. When started,
 the program should run for five seconds drawing a spinner to the console. You can use
 the attached wait function to create a delay to your program.

const wait = (delay) => {
  const t = Date.now() + delay
  while(Date.now() < t) {}
}

Hint: The backslash character (\) is a special escape character in JS. Any part of a string
 starting with a backslash is considered a special character, such as \n which stands for
 newline character. If you want to draw a backslash, you need to escape the escape character,
 meaning that you need to write a double backslash to your string.

Hint: You will benefit from the console.clear() command. */

// NOTE: run this in terminal: $ node spinner.js

const wait = (delay) => {
  const t = Date.now() + delay
  while(Date.now() < t) {}
}

// 4 lines cover the full circle!
const lines = [
  " |\n |\n |", // 3x (space pipe newline)
  "  /\n /\n/", // space space slash newline space slash newline slash
  "\n------\n", // newline (6x hyphen) newline
  "\\\n \\\n  \\" // escape backslash newline space escape backslash newline...
];

// My own extra
const rounds = 3;

console.clear();
for (i = 1; i <= rounds; i++) { 
  for (j = 1; j <= 2; j++) { // Print 2x because lines array covers only half round
    for (let line of lines) {
      console.log(`Spinning round ${i} of ${rounds}`);
      console.log(line);
      wait(200); // ms 
      console.clear();
    }
  }
};

