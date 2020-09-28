import React from 'react';
import Header from './Header.jsx';
import AddToDo from './AddToDo.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: []
    }
    this.addNewToDo = this.addNewToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    console.log('Current todos: ', this.state.toDos)
  }

  addNewToDo(todo) {
    if (this.state.toDos.indexOf(todo) > -1) {
      alert("To do item is already on the list")
    } else {
      this.setState({
        toDos: [...this.state.toDos, todo]
      })
    }
    console.log('Current todos: ', this.state.toDos)
  }

  removeToDo(todo) {
    let todos = this.state.toDos.slice();
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    this.setState({
      toDos: todos
    })
  }

  render() {
    return (
      <div>
        <Header />
        <AddToDo addNewToDo={this.addNewToDo} />
        <List items={this.state.toDos} removeToDo={this.removeToDo} />
      </div>
    )
  }
}

export default App;