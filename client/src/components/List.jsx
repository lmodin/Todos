import React from 'react';
import ListItem from './ListItem.jsx'

const List = (props) => {
  //console.log('list is loaded: ',props.isLoaded)
  if (!props.isLoaded) {
    return (
      <div>
        Loading your To Do items
      </div>
    )
  } else if (props.items.length === 0) {
    return (
      <div>
        Congratulations! You have no outstanding to dos.
      </div>
    )
  } else {
    return (
      <div>
        Click on an item to remove it
        <ul className="list" >
          {props.items.map((item,index) => (
            <ListItem item={item} key={item+index}removeToDo={props.removeToDo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default List