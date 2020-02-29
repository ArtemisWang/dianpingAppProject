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
            todos:[
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
            ],
            filter:'all'
        }
        this.nextTodoId=0
    }
    render() { 
        const todos=this.getVisibleTodos()
        const {filter}=this.state
        return (
        <div>
            <AddTodo addTodo={addTodo}/>
            <TodoList todos={todos}/>
            <Footer filter={filter}/>
        </div> 
        );
    }

    getVisibleTodos=()=>{
        const currentFilter=this.state.filter
        return this.state.todos.filter(item=>{
            if(currentFilter==='active'){
                return !item.completed
            }else if(currentFilter==='completed'){
                return item.completed
            }else{
                return true
            }
        })
    }

    addTodo=text=>{
        const todo={
            id: this.nextTodoId++,
            text,
            completed:false
        }
        const newTodos=[todo, ...this.state.todos]
        this.setState({
            todos:newTodos
        })
    }
}
 
export default App;