import React, { Component } from 'react';
import { queryByText } from '@testing-library/react';

class Todo extends Component {
    render() {
        const {completed, text}=this.props
        return (
            <div>
                {text}
            </div>
        );
    }
}

export default Todo;