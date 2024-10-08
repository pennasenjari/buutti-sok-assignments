/* It is often frustrating to restart your application multiple times during development
 to see how the changes you just made changed the behaviour of the app. NPM package 
 nodemon solves this problem. When you execute your app via nodemon, nodemon does not 
 shut down immediately after execution, but keeps listening for the changes to your 
 source code. When you save any changes, nodemon immediately restarts the app, 
 eliminating the manual restart step from your work flow.

Create a new NPM project and install to it. In your package.json file, next to your 
 normal "start" script, add a new "dev" script that starts your app with nodemon.

"scripts": {
  "start": "node ./src/index.js",
  "dev": "nodemon ./src/index.js"
},
Add index.js file with a simple console log message, save the file and start your app
 using nodemon with npm run dev. Now change the contents of the log message,
 save the file and see how nodemon immediately shows you the latest version of your
 app running. */

console.log(`Nodemon running...`)
// console.log(`Still running...`) // uncomment to test
