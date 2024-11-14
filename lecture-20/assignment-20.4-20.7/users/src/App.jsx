import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import deleteIcon from './assets/deleteIcon.png';
import editIcon from './assets/editIcon.png';

function App() {

  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");

  const addUser = () => {
    const newUser = {id: uuid(), name: newName};
    const newUsers = [...users, newUser]
    setUsers(newUsers);
    setNewName("");
  }

  const removeUser = (deleteUser) => {
    const ok = window.confirm(`Delete ${deleteUser.name}?`);
    if (ok) {
      const newUsers = users.filter(user => user.id !== deleteUser.id);
      setUsers(newUsers);
    }
  }

  const editUser = (id) => {
    const newName = prompt(`Give a new name:`);
    console.log(newName)
    if (!newName) {
      console.log("empty name")
      return;
    }
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return {...user, name: newName };
      } else {
        return user;
      }
    })
    setUsers(newUsers);
  }

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (<li key={user.id}>{user.name} 
          <img src={editIcon} className="editIcon" onClick={() => editUser(user.id)} />
          {/* Note: delete button could be shown on mouse over (onMouseEnter / onMouseLeave */}
          <img src={deleteIcon} className="deleteIcon" onClick={() => removeUser(user)} />
          </li>)
        })}
      </ul>
      <h2>Add User</h2>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => addUser()}>Add</button>
    </>
  )
}

export default App;