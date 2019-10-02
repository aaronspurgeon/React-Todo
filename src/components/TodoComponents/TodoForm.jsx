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
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;