import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const {completed, text}=this.props
        return (
            <div style={{textDecoration:completed?"line-through":"none"}}>
                {text}
            </div>
        );
    }
}

export default Todo;