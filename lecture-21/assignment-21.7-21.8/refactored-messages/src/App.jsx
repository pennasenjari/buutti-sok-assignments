import './App.css';
import { useState, useEffect } from 'react';
import * as service from './messageService'
import Modal from 'react-modal';

function App() {

  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState();
  const [selectedMessage, setSelectedMessage] = useState();

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

  const updateMessage = async () => {
    // display the old text in prompt
    //const newText = window.prompt(`Give new text:`, mess.text);
    if (!messageText) {
      return;
    }
    const newMessage = {
      text: messageText
    }
    const responseData = await service.updateMessage(selectedMessage.id, newMessage)
    const newMessages = messages.map(message => {
      return message.id === selectedMessage.id
        ? responseData
        : message
    })
    setMessages(newMessages);
    setMessageText("");
    setModalIsOpen(false);
  }

  const openModal = (message) => {
    setSelectedMessage(message);
    setMessageText(message.text);
    setModalIsOpen(true);
  }

  Modal.setAppElement("#root");
    
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
              <button onClick={() => openModal(message)}>
                Edit
              </button>
            </div>
          )
        })}
      </div>

      <Modal isOpen={modalIsOpen} className="customModalContent" overlayClassName="customModalOverlay">
        <div>
          <textarea type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
        </div>
        <div>
          <button onClick={() => updateMessage()}>
            Save message
          </button>
          <button onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  )
}

export default App;