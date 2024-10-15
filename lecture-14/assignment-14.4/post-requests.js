/* Let's send some POST requests to Buutti Messages API. The URL is the same,
 but we just need to use a different method

POST https://buutti-messages-api.azurewebsites.net/api/messages

Send a POST request without a body. What kind of error do you get? What is the status
 of the response? What is the error message?
Include a body in your request that has properties "user" and "text", both strings.
Log the object the server sends as a response.
Use a GET method like in the previous assignment to get all the messages sent by
 the username you used, to get all the messages sent by you.  */

import axios from "axios";

//const response = await axios.post('https://buutti-messages-api.azurewebsites.net/api/messages');
//console.log(response.data); // AxiosError: Request failed with status code 400...

const response2 = 
await axios.post('https://buutti-messages-api.azurewebsites.net/api/messages', 
{user: "JP", text: "Hello World!"});
console.log(response2.data);

const response3 = 
await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages?user=JP');
console.log(response3.data);
