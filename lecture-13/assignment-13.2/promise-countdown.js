/* Create a countdown program using the setTimeout function and promises.

The program should output something like this.

3 ⇒ Wait 1 second
2 ⇒ Wait another second
1 ⇒ Wait the last 1 second..
GO! */

console.log("3")

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2")
    resolve()
  }, 1000);
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("1")
        resolve()
      }, 1000);
    })
  }).then(() => {
    setTimeout(() => {
      console.log("GO!")
    }, 1000);
  }
)