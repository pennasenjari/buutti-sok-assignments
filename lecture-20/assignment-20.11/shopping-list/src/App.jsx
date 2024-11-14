import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    const unixTimestamp = Math.floor(Date.now() / 1000);
    const newObj = {"id": uuid(), "name": newItem, "checked": false, "createdAt": unixTimestamp};
    setShoppingList([...shoppingList, newObj]);
    setNewItem("");
  }

  const checkItem = (id) => {
    const newList = shoppingList.map(item => {
      if (item.id === id) {
        return {...item, "checked": !item.checked}
      } else {
        return item
      }
    });
    setShoppingList(newList)
  }

  // EXTRA 1 & 2
  const sortList = () => {
    const sorted = shoppingList.sort((a, b) => {
      // Primarily sort by checked status
      if (a.checked < b.checked) return -1;
      if (a.checked > b.checked) return 1;
      // Secondarily sort by create time
      return a.createdAt - b.createdAt; 
    });
    return sorted;
  }

  const sortedList = sortList();

  return (
    <>
      <h1>Shopping List</h1>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={() => addItem()}>+</button>
      {sortedList.map((item) => {
        return <div className={item.checked ? "checkedItem": "normalItem"} key={item.id} onClick={() => checkItem(item.id)}>{item.name}</div>
      })}
    </>
  )
}

export default App;