import './App.css';
import UserInput from './UserInput';
import ListOfItems from './ListOfItems';
import { useState } from 'react';

function App() {

  const [newId, setNewId] = useState(0);
  const [itemList, setItemList] = useState([]);

  const addItem = (name) => {
    const newItem = {"id": newId, "name": name, "gathered": false};
    setItemList([...itemList, newItem]);
    setNewId(newId + 1);
  }

  const removeItem = (id) => {
    const ok = window.confirm("Sure?");
    if (ok) {
      const newList = itemList.filter(item => item.id !== id);
      setItemList(newList);
    }
  }

  const gatherItem = (id, checked) => {
    // Make a copy of items array for modification
    const copyOfList = [...itemList];
    const item = copyOfList.find(item => parseInt(item.id) === id);
    if (checked) {
      item.gathered = true;
    } else {
      item.gathered = false;
    }
    // Replace the items array with modified items array
    setItemList(copyOfList);
  }

  return (
    <>
      <h1>Grocery List</h1>
      <UserInput addItem={addItem} />
      <ListOfItems itemList={itemList} gatherItem={gatherItem} removeItem={removeItem} />
    </>
  )
}

export default App;