import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state={
            text:'',
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.text}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }

    handleClick=()=>{
        this.props.AddTodo(this.state.text)
    }
}

export default AddTodo;