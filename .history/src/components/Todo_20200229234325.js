import React, { Component } from 'react';
import store from '../store/'

class Todo extends Component {
    render() {
        const {completed, text, onClick}=this.props
        console.log('todo有改动：',store.getState())
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