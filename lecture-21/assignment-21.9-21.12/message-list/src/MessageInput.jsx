const MessageInput = ({messageText, setMessageText, postMessage}) => {

  return (
    <div className="messageInput">
      <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
      <button onClick={postMessage}>
        Send message
      </button>
    </div>
  )
}

export default MessageInput;