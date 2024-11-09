const Item = ({item, gatherItem, removeItem}) => {

return (
  <div className="item">
    <div className="itemName">{item.name}</div>
    <label className="gathered">
      <input type="checkbox" onChange={(e) => gatherItem(item.id, e.target.checked)} 
      checked={item.gathered ? "checked" : ""} /> {item.gathered ? "OK" : "Waiting"} 
    </label>
    <div><input type="button" onClick={() => removeItem(item.id)} value="Remove" /></div>
  </div>
)}

export default Item;