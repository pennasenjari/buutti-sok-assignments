async function waitFor(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve();
    },ms);
  })
}

async function countSeconds() {
  for (i = 0; i <= 10; i++){
    console.log(i)    
    await waitFor(1000)
  }
}

countSeconds();