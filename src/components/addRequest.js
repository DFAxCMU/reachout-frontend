import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';

let input;

class AddRequest extends Component {
    render() {
        return (
            <div>
                <input ref={node => {input = node;}} />
                <Button onClick={() => {
                    this.props.onAddRequest(input.value);
                    input.value = '';
                }}><Glyphicon glyph="plus"/> Add Request</Button>
            </div>
        );
    }
}

export default AddRequest
