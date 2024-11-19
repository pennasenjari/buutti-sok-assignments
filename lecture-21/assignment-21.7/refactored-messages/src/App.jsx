import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
// Note: better would e to import only required functions
import * as service from './messageService'

function App() {

  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
    
  const getMessages = async () => {
    setMessages(await service.fetchMessages());
  }
  
  useEffect(() => {
    // run once on page load
    getMessages(); // call the async function inside synchronous callback
  }, []); // set the second argument as [] to avoid loop from state change

  const postMessage = async () => {
    const newMessage = {
      user: "JaP",
      text: messageText
    }
    const responseData = await service.postMessage(newMessage);
    console.log(responseData)
    setMessages([...messages, responseData])
  }

  const deleteMessage = async (id) => {
    const ok = window.confirm("Sure?");
    if (ok) {
      const response = await service.deleteMessage(id);
      if (response === true) {
        const newMessages = messages.filter(message => {
          return message.id !== id;
        })
        setMessages(newMessages);
      } else {
        console.log("Error deleting");
      }
    }
  }

  const updateMessage = async (mess) => {
    // display the old text in prompt
    const newText = window.prompt(`Give new text:`, mess.text);
    if (!newText) {
      return;
    }
    const newMessage = {
      text: newText
    }
    const responseData = await service.updateMessage(mess.id, newMessage)
    const newMessages = messages.map(message => {
      return message.id === mess.id
        ? responseData
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
      {messages && messages.map(message => {
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