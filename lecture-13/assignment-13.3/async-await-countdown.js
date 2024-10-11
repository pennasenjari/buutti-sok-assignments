/* Create a countdown program using async + await with the setTimeout function.

Like previously, the program should output something like this.

3       ⇒ Wait 1 second
..2     ⇒ Wait another second
….1    ⇒ Wait the last 1 second..
GO! */

const countdown = (time, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  })
}

async function wrapper() { // async to enable await
  console.log("3");
  const texts = ["2", "1", "GO!"];
  for (let text of texts) (
    console.log(await countdown(1000, text))
  )
}

wrapper();
