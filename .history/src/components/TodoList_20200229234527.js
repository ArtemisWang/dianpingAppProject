import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {

    render() {
        const {todos,toggleTodo}=this.props
        console.log('todo有改动：',store.getState())
        return (
            <ul>
                {
                    todos.map(todo=>{
                        return <Todo key={todo.id} {...todo} onClick={()=>{toggleTodo(todo.id)}}/>
                    })
                }
            </ul>
        );
    }
}

export default TodoList;