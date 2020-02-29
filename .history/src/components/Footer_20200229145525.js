import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const {filter}=this.props
        return (
            <div>
                <span>Show:</span>
                <button disabled={filter==="all"}>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        );
    }
}

export default Footer;