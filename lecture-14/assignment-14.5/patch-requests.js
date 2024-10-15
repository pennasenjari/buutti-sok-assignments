/* Let's send some PATCH requests to Buutti Messages API. To identify 
our post we want to update, we include the id in the address:
PATCH https://buutti-messages-api.azurewebsites.net/api/messages/{id}

Use a GET request to find out an id number of one of your posts.
Use that id number in a PATCH request to change the text of the body. You need to
 send the new text as the body parameter, just as you did with the POST request.
Log the response the server sends.
Use a GET request to verify that the change you made is stored on the server. */

import axios from "axios";

const response = await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages?user=JP');
console.log(response.data);

/*
[
  { id: 28, text: 'Hello World!', user: 'JP' },
  { id: 30, text: 'Hello World!', user: 'JP' },
  { id: 31, text: 'Hello World!', user: 'JP' },
  { id: 36, text: 'Hello World!', user: 'JP' }
]
*/

const response2 = 
await axios.patch('https://buutti-messages-api.azurewebsites.net/api/messages/28', 
{text: "Hello World! Modified."});
console.log(response2.data);
/* { id: 28, text: 'Hello World! Modified.', user: 'JP' } */

const response3 = await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages?user=JP');
console.log(response3.data);
/*
[
  { id: 28, text: 'Hello World! Modified.', user: 'JP' },
  { id: 30, text: 'Hello World!', user: 'JP' },
  { id: 31, text: 'Hello World!', user: 'JP' },
  { id: 36, text: 'Hello World!', user: 'JP' }
]
*/