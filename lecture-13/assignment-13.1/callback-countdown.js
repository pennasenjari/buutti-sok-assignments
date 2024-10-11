/* Create a countdown program using the setTimeout function and callbacks.

The program should output something like this.

3   ⇒ Wait 1 second
2   ⇒ Wait another second
1   ⇒ Wait the last 1 second..
GO! */

//Not allowed :-)
//console.log("3");
//setTimeout(() => console.log("2"), 1000);
//setTimeout(() => console.log("1"), 2000);
//setTimeout(() => console.log("GO!"), 3000);

// Using only 1000 ms delay:
console.log("3");
setTimeout(() => {
  console.log("2");
  setTimeout(() => {
    console.log("1");
    setTimeout(() => {
      console.log("GO!");
    }, 1000);
  }, 1000);
}, 1000);
