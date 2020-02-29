import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const {todos}=this.props
        return (
            <ul>
                {
                    todos.map(todo=>{
                        return <li>{todo.text}</li>
                    })
                }
            </ul>
        );
    }
}

export default TodoList;