/* Use the same game list as on assignment 10.11. Copy it as base.

a) Find all games that the player has won and calculate the player's 
  average score in them. Print the average score.

Think of fitting array methods that can help with the task.

b) Find all games that the player has lost and calculate the player's
  average score in them. Print the average score. */

const games = [
  { id: 1586948654, date: "2022-10-27", score: 145, won: false },
  { id: 2356325431, date: "2022-10-30", score: 95, won: false },
  { id: 2968411644, date: "2022-10-31", score: 180, won: true },
  { id: 1131684981, date: "2022-11-01", score: 210, won: true },
  { id: 1958468135, date: "2022-11-01", score: 111, won: true },
  { id: 2221358512, date: "2022-11-02", score: 197, won: false },
  { id: 1847684969, date: "2022-11-03", score: 203, won: true } 
];

// a)

let sum = 0;
let wins = 0;

const gamesWon = games.filter(game => game.won === true).map(filteredGame => {
  wins++;
  sum += filteredGame.score;
});
console.log(`\nThe average score of games won is ${(sum / wins).toFixed(1)}.`);

// b)

// Q: introduce all variables at the top or when needed?
sum = 0;
let losses = 0;

const gamesLost = games.filter(game => game.won === false).map(filteredGame => {
  losses++;
  sum += filteredGame.score;
});
console.log(`\nThe average score of games lost is ${(sum / losses).toFixed(1)}.`);