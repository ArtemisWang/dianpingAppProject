import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const todos=[
    {
        id:1,
        text:'学习react',
        completed:true
    },
    {
        id:2,
        text:'学习redux',
        completed:false
    },
    {
        id:3,
        text:'学习router',
        completed:false
    }
]

const filter= "all"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos:[],
            filter:'all'
        }
    }
    render() { 
        const {todos,filter}=this.state
        return (
        <div>
            <AddTodo/>
            <TodoList todos={todos}/>
            <Footer filter={filter}/>
        </div> 
        );
    }

    getVisibleTodos=()=>{
        const currentFilter=this.state.filter
        if(currentFilter==='active'){
            return this.state.todos.filter((item)=>{
                return !item.completed
            })
        }else if(currentFilter==='completed'){
            return this.state.todos.filter((item)=>{
                return item.completed
            })
        }else{
            return this.state.todos
        }
    }
}
 
export default App;