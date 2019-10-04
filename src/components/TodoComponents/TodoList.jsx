import React from 'react';


const TodoList = (props) => {
    return (
        <div 
            onClick={props.onClick}
            className={`item${props.item.completed ? " completed" : ""}`}
            >
            <p>{props.item.task}</p>
        </div>
    )
}

export default TodoList;
