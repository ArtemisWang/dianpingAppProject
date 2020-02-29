import React, { Component } from 'react';

class AddTodo extends Component {
    
    render() {
        return (
            <div>
                <input value={this.props.text} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }

    handleChange=(e)=>{
        this.props.setTodo(e.target.value)
    }

    handleClick=()=>{
        this.props.addTodo(this.state.text)
    }
}

export default AddTodo;