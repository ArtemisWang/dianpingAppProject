import React, { Component } from 'react';

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