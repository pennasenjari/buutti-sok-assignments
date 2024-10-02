/* Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/ */

// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
  return arr.reduce((total, current) => total + current); 
}
console.log(`Total of all numbers: ${total([1,2,3])}`);

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
  return arr.reduce((string, current) => string + current.toString()); 
}
console.log(`String of all numbers: ${stringConcat([1,2,3])}`);

// 3) Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(voters) {
  return voters.reduce((total, current) => {
    if (current.voted === true) {
      total++;
    }
    return total;
  }, 0); // initial value 0 -> loop all values!
}
console.log(`Total amount of votes: ${totalVotes(voters)}`);

/* 4) Given an array of all your wishlist items,
      figure out how much it would cost to just buy everything at once */
function shoppingSpree(wishList) {
  return wishList.reduce((total, current) => total += current.price, 0); // Remember 0!
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(`Cost to buy everything is ${shoppingSpree(wishlist)}`);

// 5) Given an array of arrays, flatten them into a single array
function flatten(arrays) {
  return arrays.reduce((combined, current) => combined.concat(current));
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log("Arrays combined:");
console.log(flatten(arrays));

/* 6) Given an array of potential voters, return an object representing
   the results of the vote. Include how many of the potential voters were 
   in the ages 18-25, how many from 26-35, how many from 36-55, 
   and how many of each of those age ranges actually voted. 
   The resulting object containing this data should have 6 properties. 
   See the example output at the bottom. */

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(voters) {
  
  return voters.reduce((results, current) => {
    if (current.age <= 25) {
      if (current.voted === true) {
        results.numYoungVotes++;
      }
      results.numYoungPeople++;
    } else if (current.age > 25 && current.age <= 35) {
      if (current.voted === true) {
        results.numMidVotesPeople++;
      }
      results.numMidsPeople++;
    } else {
      if (current.voted === true) {
        results.numOldVotesPeople++;
      }
      results.numOldsPeople++;       
    }
    return results;
  },
  { // NOTE: initial values for reduce given as an object!
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  }); // end reduce
}
console.log("Total voter results:");
console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/