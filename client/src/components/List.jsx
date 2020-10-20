import React from 'react';
import ListItem from './ListItem.jsx'

const List = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        Congratulations! You have no outstanding to dos.
      </div>
    )
  }
  return (
    <div>
      Click on an item to remove it
      <ul className="list" >
      {props.items.map((item) => (
        <ListItem item={item} removeToDo={props.removeToDo} />
      ))}
      </ul>
    </div>
  )
}

export default List