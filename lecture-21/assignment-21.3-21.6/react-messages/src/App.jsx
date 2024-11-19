import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [newText, setNewText] = useState("");
  const baseUrl = "https://buutti-messages-api.azurewebsites.net/api/messages";
  
  useEffect(() => {
    // run once on page load
    async function fetchData() {
        // could use axios as well
        const res = await fetch(baseUrl);
        const messages = await res.json();
        setMessages(messages);
    }
    fetchData(); // call the async function inside synchronous callback
  }, []); // set the second argument as [] to avoid loop from state change

  const postMessage = async () => {
    const newMessage = {
      user: "JaP",
      text: messageText
    }
    const response = await axios.post(baseUrl, newMessage)
    setMessages([...messages, response.data])
  }

  const deleteMessage = async (id) => {
    const ok = window.confirm("Sure?");
    if (ok) {
      const response = await axios.delete(`${baseUrl}/${id}`);
      // check respose status if desired
      const newMessages = messages.filter(message => {
        return message.id !== id;
      })
      setMessages(newMessages);
    }
  }

  const updateMessage = async (mess) => {
    const url = `${baseUrl}/${mess.id}`;
    // display the old text in prompt
    const newText = window.prompt(`Give new text:`, mess.text);
    if (!newText) {
      return;
    }
    const newMessage = {
      text: newText
    }
    const response = await axios.patch(url, newMessage)
    const newMessages = messages.map(message => {
      return message.id === mess.id
        ? response.data
        : message
    })
    setMessages(newMessages)
  }

  return (
    <>
    <div className="messages">
      <div>
        <h1>React Messages</h1>
        <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
        <button onClick={postMessage}>
          Send message
        </button>
      </div>
      {messages.map(message => {
        return (
          <div key={message.id} className="message">
            <div className="user">{message.user}: </div>
            <div className="text">{message.text}</div>
            <button onClick={() => deleteMessage(message.id)}>
              Delete
            </button>
            <button onClick={() => updateMessage(message)}>
              Edit
            </button>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default App;