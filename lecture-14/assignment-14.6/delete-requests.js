/* Let's send some DELETE requests to Buutti Messages API. 
We again identify our target messages by id:

DELETE https://buutti-messages-api.azurewebsites.net/api/messages/{id}

Use a GET request to find out an id number of one of your posts.
Use that id number in a DELETE request to remove the message. Log the status code
 of the response to the console.
Use a GET request to verify that the message you removed is gone from the server. */

import axios from "axios";

const response = 
await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages?user=JP');
console.log(response.data);

/*
[
  { id: 28, text: 'Hello World! Modified.', user: 'JP' },
  { id: 30, text: 'Hello World!', user: 'JP' },
  { id: 31, text: 'Hello World!', user: 'JP' },
  { id: 36, text: 'Hello World!', user: 'JP' }
]
*/

const response2 = 
await axios.delete('https://buutti-messages-api.azurewebsites.net/api/messages/36');
console.log(response2.data);
// empty reponse = success

const response3 = 
await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages?user=JP');
console.log(response3.data);
/*
[
  { id: 28, text: 'Hello World! Modified.', user: 'JP' },
  { id: 30, text: 'Hello World!', user: 'JP' },
  { id: 31, text: 'Hello World!', user: 'JP' }
]
*/

// Extra: delete all own messages
for (let message of response3.data) {
  if (message.id) {
    const response4 = 
    await axios.delete(`https://buutti-messages-api.azurewebsites.net/api/messages/${message.id}`);
    console.log(response4); // Empty response = OK
  }
}

const response5 = 
await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages?user=JP');
console.log(response5.data); // []
