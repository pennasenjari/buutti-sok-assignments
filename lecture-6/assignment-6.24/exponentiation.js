/* You're creating a game where players have income that is given to them
as money at specific intervals.

Mid-way through the game's development, you realize that a player having more income
than someone else gives them an unfairly large advantage. To reduce this advantage,
you decide to exponent each player's income with a number between 0 and 1 (say, 0.9)
to reduce the effect larger income has on the player's final money.
You could think of it as progressive taxing.

Create variables for the income of two different players.
Give them values that are different from each other.

a) Print out the difference between the players' income

b) Alter each income by exponentiating them with some specific number (like 0.9).
Calculate and print the difference between the incomes after exponentiation.

PS. Exponentiation is also called raising a number to a power.
For example, exponentiating 50 with 0.9 could be called
"raising 50 to the power of 0.9". */

const rounds = 5;
const raise = 5;
const toPower = 0.9;
let player1Income = 10;
let player2Income = 20;
let diff = player1Income - player2Income;

console.log(`\nHaving 2 players with some income. Playing ${rounds} rounds.
At each round, incomes are being raised by ${raise}.
After each raise the incomes are being cut by multiplier ${toPower}.\n`);

for (i=1; i <= rounds; i++) {
  if (i == 1) {
    console.log(`Round ${i}. No raise yet!`);
  } else {
    console.log(`Round ${i}`);
    player1Income = (player1Income + raise) ** toPower;
    player2Income = (player2Income + raise) ** toPower;
    diff = player1Income - player2Income;
  }
  console.log(`Player 1 income is now ${player1Income.toFixed(2)}`);
  console.log(`Player 2 income is now ${player2Income.toFixed(2)}`);
  console.log(`Difference between incomes is ${diff.toFixed(2)}\n`);
}