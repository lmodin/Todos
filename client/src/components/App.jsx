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
    this.getToDos = this.getToDos.bind(this);
    //console.log('Current todos: ', this.state.toDos)
  }

  getToDos() {
    fetch('http://localhost:8000/toDos')
      .then(data => data.json())
      .then((todos) => {
        //console.log('I fetched the todos: ',todos)
        this.setState({
          toDos: todos,
          isLoaded: true,
        })
      })
  }

  componentDidMount() {
    this.getToDos()
  }

  addNewToDo(todo) {
    if (this.state.toDos.indexOf(todo) > -1) {
      alert("To do item is already on the list")
    } else {
      fetch('http://localhost:8000/toDos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todo: todo
        })
      })
        .then(data => data.json())
        .then(data => {
          //console.log('data saved on server: ',data)
          this.setState({
            toDos: data
          })
        })
        .catch((err) => {console.log('Error: ', err)})
    }
    //console.log('Current todos: ', this.state.toDos)
  }

  removeToDo(todo) {
    fetch('http://localhost:8000/toDos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: todo
      })
    })
      .then(data => data.json())
      .then(todos => {
        //console.log('item deleted on server')
        this.setState({
          toDos: todos
        })
      })
      .catch(err => {console.log('Error: ', err)})
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