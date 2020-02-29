import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

cosnt todos=[
    {
        id:1,
        text:'学习react',
        completed:true
    },
    {
        id:2,
        text:'学习redux',
        completed:true
    },
    {
        id:3,
        text:'学习router',
        completed:true
    }
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <AddTodo/>
            <TodoList/>
            <Footer/>
        </div> 
        );
    }
}
 
export default App;