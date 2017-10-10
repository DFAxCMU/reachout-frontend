import React, { Component } from 'react';

import TopNav from './topnav.js';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "John Doe", 
        };
    }
    render() {
        var sidebarIsOpen = false;
        return (
            <div>
                <TopNav />
                <div>user header will go here</div>
                <hr/>
                <div>user info will go here</div>
            </div>
        );
    }
}