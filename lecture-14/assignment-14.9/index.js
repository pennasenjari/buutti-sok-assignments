/* Createa a command line utility to manage messages in Buutti Messages API we used in the
 lecture assignments. Do this on stages

a) Create an app that asks the user for a command. If the user gives the command Q,
 the program terminates. If the user gives any other command, the program gives 
 an error message and repeats the question.

b) Add the ability to print all the messages. If the user uses command A, the app fetches
 all messages from the API using a GET request, and prints them to the console. After this
 it again asks the user for a command.

c) Add the ability to print all the messages by a single user. If the user uses command U,
 the app asks for username, and then fetches all the messages written by the given user 
 from the API using the useruname as a query parameter. Again, after displaying the messages, 
 it returns to the beginning state.

d) Add the ability to write messages. If the user uses command W the app asks for username
 and message, and sends those to the API using a POST request. After sending the data, it 
 returns to the beginning state.

e) Add the ability to edit messages. If the user uses command E the app asks for the
 message id and a new message contents. Then it sends a PATCH request to the API that 
 updates the corresponding message. Afterwards it again returns to the beginning state.

f) Add the ability to delete messages. If the user uses command D the app asks for
 the message id and sends a DELETE request to the API that removes the given message. 
 When this is complete, it returns to the beginning state.

Extra: Add error handling. What if user gives an id that doesn't match any message? 
Modify your app so that it gives a sensible error message before returning 
 to the beginning state. */

//import { student, allStudents, allCourses, totalCredits, totalAverage, addStudent,
//  addCourse, getAverage, getCredits, setGrade, delCourse, delStudent } from "./utils.js";

import readline from 'readline/promises'; // support await
import { getAllMessages, getUserMessages, writeMessage, editMessage, deleteMessage }
from "./utils.js";

const reader = readline.createInterface(process.stdin, process.stdout);

// My own extra
function printHelp() {
  const help = [
    "H = Help (list available commands)",
    "A = All messages",
    "U = User's messages",
    "W = Write a message",
    "E = Edit message",
    "D = Delete message",
    "Q = Quit"
  ]
  console.log("\nAvailable commands:\n");
  console.log(help.join("\n"));
  console.log("\nAlso lowercase commands will work.");
}

async function runAPI() {
  const command = await reader.question("\nGive a command:");
  switch (command.toUpperCase()) {
    case "Q":
      reader.close();
      console.log("Bye bye!");
      return;
    case "H":
      printHelp();
      break;
    case "A":
      try {
        const messages = await getAllMessages();
        if (messages && messages.data.length > 0) {
          console.log(messages.data);
        } else {
          console.log(`No messages found.`);
        }
      } catch (error) {
        console.log(error);
      }
      break;
    case "U":
      try {
        const user = await reader.question("\nUser name (case sensitive!):");
        const messages = await getUserMessages(user);
        if (messages && messages.data.length > 0) {
          console.log(messages.data);
        } else {
          console.log(`User ${user} does not have messages.`);
        }
      } catch (error) {
        console.log(error);
      }
      break;
    case "W":
      try {
        const user = await reader.question("\nUser name (case sensitive!):");
        const text = await reader.question("\nMessage text:");
        const response = await writeMessage(user, text);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      break;
    case "E":
      try {
        const id = await reader.question("\nMessage ID:");
        const text = await reader.question("\nMessage text:");
        const response = await editMessage(id, text);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      break;
    case "D":
      try {
        const id = await reader.question("\nDeleting message. Message ID:");
        const response = await deleteMessage(id);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      console.log("Error: Unknown command");
      break;  
  }
  runAPI(); // loop questions until user ends the prorgram
}

function main() {
  console.clear();
  console.log("\nWelcome to Buutti messages API!")
  printHelp();
  runAPI();
}

main();