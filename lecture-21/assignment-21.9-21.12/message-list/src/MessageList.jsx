import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Message from './Message';
import MessageInput from './MessageInput';

const API = 'https://starttipakettiforumapi.azurewebsites.net/';
const userKey = "KlTCwivO"; // Aragorn
const headers = { userKey: userKey };
const instance = axios.create({
    baseURL: API,
    headers: headers,
    timeout: 1000
});

const MessageList = () => {

  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState();
  const [selectedMessage, setSelectedMessage] = useState();

  const getMessages = async () => {
    const response = await instance.get("allMessages");
    setMessages(response.data);
  }
 
  const postMessage = async () => {
    const response = await instance.post("newMessage", 
      { "message": messageText },
    );
    // Note: field names in  posted message and saved message are different
    // id <> message_id, content <> message
    // Reformatting the response to be added to state
    const mess = response.data;
    const addedMessage = {
      "message_id": mess.id, // problem
      "sender_key": mess.sender_key,
      "sender_name": mess.sender_name,
      "content": mess.message, // problem
      "timestamp": mess.timestamp
    }
    setMessages([...messages, addedMessage]);
    setMessageText("");
  }

  const deleteMessage = async (id) => {
    const ok = window.confirm("Sure?");
    if (ok) {
      const response = await instance.delete(`deleteMessage/${id}`);
      const newMessages = messages.filter(message => {
        return message.message_id !== id;
      })
      setMessages(newMessages);
    }
  }

  const modifyMessage = (message) => {
    setSelectedMessage(message);
    setMessageText(message.content);
    setModalIsOpen(true);
  }

  const updateMessage = async () => {
    if (!messageText) {
      return;
    }
    const newMessage = {"id": selectedMessage.message_id, "message": messageText};
    const response = await instance.put("modifyMessage", newMessage);
    const mess = response.data;
    const modifiedMessage = {
      "message_id": mess.id, // field names differ: message_id vs id
      "sender_key": mess.sender_key,
      "sender_name": mess.sender_name,
      "content": mess.message, // field names differ: content vs. message
      "timestamp": mess.timestamp
    }
    const newMessages = messages.map(message => {
      return message.message_id === modifiedMessage.message_id
        ? modifiedMessage
        : message
    })
    setMessages(newMessages);
    setMessageText("");
    setModalIsOpen(false);
  }

  useEffect(() => {
    getMessages();
  }, []);

  const sortedMessages = [...messages].sort((a, b) => 
    new Date(b.timestamp) - new Date(a.timestamp)
  )

  Modal.setAppElement('#root');

  return (
  <>
    <div className="messages">
      <h2>Messages</h2>
      <MessageInput messageText={messageText} setMessageText={setMessageText} postMessage={postMessage} />
      <ul>
        {sortedMessages.map((message) => (
          <Message key={message.message_id} message={message}
            deleteMessage={deleteMessage} modifyMessage={modifyMessage} />
        ))}
      </ul>
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

export { MessageList };