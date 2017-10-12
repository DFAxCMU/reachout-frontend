import React, { Component } from 'react';

import TopNav from './topnav';
import RequestsContainer from '../containers/requestsContainer';

class Profile extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div>user header will go here</div>
                <hr/>
                <div>user info will go here</div>
                <RequestsContainer />
            </div>
        );
    }
}

export default Profile;