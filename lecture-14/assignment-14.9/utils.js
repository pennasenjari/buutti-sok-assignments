import axios from "axios";

async function getAllMessages() {
  return await axios.get('https://buutti-messages-api.azurewebsites.net/api/messages');
}

async function getUserMessages(user) {
  if (user.length < 1) {
    return {data: "Error: username missing"};
  } 
  return await axios.get(`https://buutti-messages-api.azurewebsites.net/api/messages?user=${user}`);
}

async function writeMessage(user, text) {
  if (user.length < 1) {
    return {data: "Error: username missing"};
  } 
  if (text.length < 1) {
    return {data: "Error: message missing"};
  }
  return await axios.post(`https://buutti-messages-api.azurewebsites.net/api/messages`, 
  {user: user, text: text});
}

async function editMessage(id, text) {
  if (id.length < 1) {
    return {data: "Error: id missing"};
  } 
  if (text.length < 1) {
    return {data: "Error: message missing"};
  }
  return await axios.patch(`https://buutti-messages-api.azurewebsites.net/api/messages/${id}`, 
  {text: text});
}

async function deleteMessage(id) {
  if (id.length < 1) {
    return {data: "Error: id missing"};
  } 
  try {
    await axios.delete(`https://buutti-messages-api.azurewebsites.net/api/messages/${id}`);
    return {data: `Deleted message with ID ${id}`};
  } catch {
    return(error);
  }
}

export { getAllMessages, getUserMessages, writeMessage, editMessage, deleteMessage }