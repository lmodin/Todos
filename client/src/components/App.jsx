import React from 'react';
import Header from './Header.jsx';
import AddToDo from './AddToDo.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: [],
      isLoaded: false,
    }
    this.addNewToDo = this.addNewToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    //console.log('Current todos: ', this.state.toDos)
  }

  componentDidMount() {
    fetch('http://localhost:8000/toDos')
      .then(data => data.json())
      .then((toDos) => {
        this.setState({
          toDos: toDos,
          isLoaded: true,
        })
      })
  }
  addNewToDo(todo) {
    if (this.state.toDos.indexOf(todo) > -1) {
      alert("To do item is already on the list")
    } else {
      fetch('http://localhost:8000/toDos', {
        method: 'POST',
        body: todo
      })
        .then(data => {console.log('data saved on server')})
        .catch((err) => {console.log('Error: ', err)})
      this.setState({
        toDos: [...this.state.toDos, todo]
      })
    }
    //console.log('Current todos: ', this.state.toDos)
  }

  removeToDo(todo) {
    fetch('http://localhost:8000/toDos', {
      method: 'DELETE',
      body: todo
    })
      .then(data => {console.log('item deleted on server')})
      .catch(err => {console.log('Error: ', err)})
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
        <Header/>
        <AddToDo addNewToDo={this.addNewToDo} />
        <List isLoaded={this.state.isLoaded} items={this.state.toDos} removeToDo={this.removeToDo} />
      </div>
    )
  }
}

export default App;