import React from 'react';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.addNewToDo(this.state.todo);
  }

  render() {
    return (
      <form className="addToDo" onSubmit={this.handleSubmit}>
        <input type="text" name="todo" default="Type a new To Do here" onChange={this.handleChange}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default AddToDo