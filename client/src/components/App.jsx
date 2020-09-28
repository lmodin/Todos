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
  }



  render() {
    return (
      <div>
        <Header />
        <AddToDo />
        <List items={this.state.todos} />
      </div>
    )
  }
}

export default App;