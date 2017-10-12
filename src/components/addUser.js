import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';

let input;

class AddUser extends Component {
    render() {
        return (
            <div>
                <input ref={node => {input = node;}} />
                <Button onClick={() => {
                    this.props.onAddUser(input.value);
                    input.value = '';
                }}><Glyphicon glyph="plus"/> Add User</Button>
            </div>
        );
    }
}

export default AddUser
