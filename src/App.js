import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import ProfileContainer from './containers/profileContainer';
import Profile from './components/profile';
import HomePage from './components/homepage';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/profile' component={Profile} />
                {/* <Route exact path='/profile/:id' component={ProfileContainer} /> */}
            </div>
        );
    }
}

export default App;
