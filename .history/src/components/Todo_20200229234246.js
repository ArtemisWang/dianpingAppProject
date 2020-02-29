import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const {completed, text, onClick}=this.props
        console.log('todo有改动：',)
        return (
            <li style={{textDecoration:completed?"line-through":"none"}}
                onClick={onClick}
            >
                {text}
            </li>
        );
    }
}

export default Todo;