import React from 'react';

const ListItem = (props) => {
  return (
    <li onClick={(e) => props.removeToDo(props.item)}>
      {props.item}
    </li>
  )
}

export default ListItem