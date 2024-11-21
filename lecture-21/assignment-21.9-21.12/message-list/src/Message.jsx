const Message = ({message, deleteMessage, modifyMessage}) => {

  return (
    <li>
      <strong>{message.sender_name}</strong>: {message.content}
      <button onClick={() => deleteMessage(message.message_id)}>Delete</button>
      <button onClick={() => modifyMessage(message)}>Modify</button><br />
      <small>{new Date(message.timestamp).toLocaleString('fi-FI')}</small>
    </li>
  )
}

export default Message;