import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: 'Test Task',
      id: 1,
      completed: false
    }
  }
  toggleTask = (even, itemID) => {

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Tasks you need to do ASAP!</h1>
        {this.state.task.map(task => (
                <TodoList key={task.id} task={task} onClick={e => this.toggleItem(e, task.id)}/>
            ))}
      </div>
    );
  }
}

export default App;
