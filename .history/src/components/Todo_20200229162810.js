import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const {completed, text}=this.props
        console.log(this.props)
        return (
            <li style={{textDecoration:completed?"line-through":"none"}}
                
            >
                {text}
            </li>
        );
    }
}

export default Todo;