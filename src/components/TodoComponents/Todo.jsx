import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todo = (props) => {
    return (
        <div>
            <TodoList task={props.task}/>
            <TodoForm />
        </div>
    )
}

export default Todo;