/* Let's send some GET requests to Buutti Messages API. It is a practice API that stores
 messages. Each message is represented by an object that has three parameters: 
 id, user, and text. The endpoint to get all messages is
 GET https://buutti-messages-api.azurewebsites.net/api/messages

Use axios to send a GET request to fetch the list of all the messages on the server.
Log all the messages to console.
Send a GET request to same endpoint with a query parameter "user" to get all the messages
 on the server sent by user "KV". Note that the value in user query parameter is
 case sensitive, meaning that “kv” and “KV” return different results!

 Also log these to the console. */

import axios from "axios";

// 1)
const response = await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages');
//console.log(`\n${response.data}`)
console.log(response.data);

// 2)
const response2 = await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages?user=KV');
//console.log(`\n${response.data}`)
console.log(response2.data);
