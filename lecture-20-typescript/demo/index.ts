const input = process.argv;

// Assignment 1: Create NPM project (done)

// Assignment 2: CreateTS NPM Project (done)

// Assignment 3: "Lazy Printer"
/*
input.forEach((val, index) => {
  // Print arguments that are shorter than 5 chars
  if (val.length < 5) {
    console.log(val);
  }
});
*/

// Assignment 4: Multiplier
/* 
let sum = 0;
let i = 0;
input.slice(2).forEach((val) => {
  if (i === 0) {
    sum = parseInt(val);
  } else {
    sum *= parseInt(val);
  }
  i++;
});
console.log(sum);
*/

// Assignment 5
/*
const emphaisize = (str: string): string => {
  return "***" + str.toUpperCase() + "***";
}

console.log(emphaisize("TypeScript"));
*/

// Assignment 6
/*
const randomNumber = (nbr1: number | string, nbr2: number | string): string | undefined => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return String(nbr1);
  } else {
    return String(nbr2); 
  }
}
//console.log(randomNumber(1, 6)); 
onsole.log(randomNumber(input[2], input[3])); // from command line
*/

// Assignment 7
/*
class User {
  userId: string
  username: string
  isAdmin: boolean

  constructor(userId: number, username: string, isAdmin: boolean) {
      this.userId = userId
      this.username = username
      this.isAdmin = isAdmin
  }

}

const user = new User(1, "Heikki", false);
console.log(user)

//user.lastLogin = "2024-01-01"; // should cause error but didn't?
//console.log(user)
*/

// Interface example

type FavoriteColors = "red" | "green" | "blue";

type ExampleObject = {
  firstname: string,
  lastname: string,
  age: number
}

interface Person {
  firstname: string;
  lastname: string;
  age: number;
  children: []  | string[];
  favoriteColor: FavoriteColors,
  getFullName: () => string;
}

interface Gamer extends Person {
  favoriteGame: string; // note: semicolon
  steamId?: number;
}

const person: Gamer = {
  firstname: "Heikki", // note: comma
  lastname: "Hela",
  age: 50,
  children: [],
  favoriteColor: "blue",
  favoriteGame: "Duke Nukem",
  steamId: 1, // Not mandatory
  getFullName: function() { // "this" available
    return this.firstname + " " + this.lastname;
  }
}