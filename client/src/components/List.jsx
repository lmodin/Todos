import React from 'react';

const List = (props) => {

  return (
    <ul className="list" >
      {props.items.map((item) => (
        <li>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default List