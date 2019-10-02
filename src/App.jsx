import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import data from './data';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.scss';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: data,
    }
  }
  toggleTask = (event, itemID) => {
    event.preventDefault()
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemID) {
          return {
            ...item, completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }


  clearCompleted = event => {
    event.preventDefault()
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed
      })
    })
  }

  addTask = (event, taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div style={{textAlign: 'center'}} className={'App'}>
        <h1>Tasks you need to do ASAP!</h1>
        <TodoForm addTask={this.addTask}/>
        <div className='tasks'>
          {this.state.tasks.map(item => {
            return <TodoList
              key={item.id}
              item={item}
              onClick={(e) => this.toggleTask(e, item.id)}
            />
          })}
        </div>
        <button className='deleteBtn' onClick={this.clearCompleted}>Delete Completed</button>
      </div>
    );
  }
}

export default App;
