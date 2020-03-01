import React, { Component } from 'react';
import store from '../store/'

class TodoList extends Component {

    render() {
        const {todos,toggleTodo}=this.props
        // console.log('todo有改动：',store.getState())

        return (
            <ul>
                {todos.map((todo)=>{
                    return (
                        <li key={todo.id} onClick={()=>{toggleTodo(todo.id)}} style={{textDecoration:todo.completed?"line-through":"none"}}>
                            {todo.text}
                        </li>
                    )
                })}
            </ul>
        )

    }
}

export default TodoList;