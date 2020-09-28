import React from 'react';
import ListItem from './ListItem.jsx'

const List = (props) => {

  return (
    <ul className="list" >
      Click on an item to remove it
      {props.items.map((item) => (
        <ListItem item={item} removeToDo={props.removeToDo} />
      ))}
    </ul>
  )
}

export default List