import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom'

class HomePage extends Component {
    renderLinks(names) {
        return names.map((name, i) => <li key={i}><Link to={`/profile/${i}`}>Profile: {name}</Link></li>)
    }
    render() {
        const exampleNames = ["John Doe", "Jane Smith", "Firstname Lastname"];
        return (
            <Link to={`/profile`}>Go to profile</Link>
            // <ul>
            //     {this.renderLinks(exampleNames)}
            // </ul>
        );
    }
}

export default HomePage; 