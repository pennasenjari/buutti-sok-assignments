import axios from 'axios';
const baseUrl = "https://buutti-messages-api.azurewebsites.net/api/messages";

// Note: it's good idea to return only data from here, not the whole response
// Note: collect new message in "react" side (App.jsx)

const fetchMessages = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const postMessage = async (newMessage) => {
  const response = await axios.post(baseUrl, newMessage);
  return response.data;
}

const deleteMessage = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  // check respose status if desired
  return true;
}

const updateMessage = async (id, newMessage) => {
  const url = `${baseUrl}/${id}`;
  const response = await axios.patch(url, newMessage)
  return response.data;
}

export { fetchMessages, postMessage, deleteMessage, updateMessage };