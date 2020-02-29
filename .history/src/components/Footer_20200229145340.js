import React, { Component } from 'react';

class Footer extends Component {
    render() {

        return (
            <div>
                <span>Show:</span>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        );
    }
}

export default Footer;