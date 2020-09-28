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

  render() {
    return (
      <div>
        <Header />
        <AddToDo addNewToDo={this.addNewToDo} />
        <List items={this.state.toDos} />
      </div>
    )
  }
}

export default App;