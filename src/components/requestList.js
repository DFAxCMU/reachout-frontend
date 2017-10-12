import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import AddRequest from './addRequest';    

import { store } from '../index.js';

class RequestList extends Component {
    renderRequest(request, i) {
        return <li key={i}>{request}</li>
    }

    render() {
        return (
            <div>
                <h4>Requests:</h4>
                <ol>{this.props.requests.map(this.renderRequest)}</ol>
                <AddRequest onAddRequest={this.props.onAddRequest} />
            </div>
        );
    }
}

export default RequestList
