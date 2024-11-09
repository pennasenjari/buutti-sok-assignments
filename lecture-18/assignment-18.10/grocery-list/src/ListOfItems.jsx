import Item from './Item';

const ListOfItems = ({itemList, gatherItem, removeItem}) => {
  
  return(
    <div className="listOfItems">
      {itemList.map(item => <Item key={item.id} item={item} gatherItem={gatherItem} 
      removeItem={removeItem} />)}
    </div>
  )
}

export default ListOfItems;