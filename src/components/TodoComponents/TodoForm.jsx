import React from 'react';
import { EventEmitter } from 'events';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addTask(event, this.state.value)

        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='todoForm'>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className='todoInput'
                    placeholder='Enter a new task'
                />
                <button className='addBtn'>Add</button>
            </form>
        );
    }
}

export default TodoForm;