import React, { Component } from 'react';
import Todo from './Todo.js'
import store from '../store/'

class TodoList extends Component {

    render() {
        const {todos,toggleTodo}=this.props
        console.log('todo有改动：',store.getState())
        const newState=store.getState()

        return (
            <ul>
                {newState.todos.map((todo)=>{
                    return (
                        <li key={todo.id} onClick={()=>{toggleTodo(todo.id)}} style={{textDecoration:todo.completed?"line-through":"none"}}>
                            {todo.text}
                        </li>
                    )
                })}
            </ul>
        )

        // return (
        //     <ul>
        //         {
        //             todos.map(todo=>{
        //                 return <Todo key={todo.id} {...todo} onClick={()=>{toggleTodo(todo.id)}}/>
        //             })
        //         }
        //     </ul>
        // );
    }
}

export default TodoList;