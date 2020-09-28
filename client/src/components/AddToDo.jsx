import React from 'react';

const AddToDo = (props) => {
  console.log(typeof props.addNewToDo)
  var newItem = ""

  const handleChange = (e) => {
    newItem = e.target.value;
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewToDo(newItem);
  }

  return (
    <form className="addToDo" onSubmit={handleSubmit}>
      <input type="text" name="todo" default="Type a new To Do here" onChange={handleChange}></input>
      <input type="submit"></input>
    </form>
  )
}

export default AddToDo