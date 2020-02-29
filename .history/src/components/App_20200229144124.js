import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

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