import React, { Component } from 'react';
import { Button,
         FormControl,
         Glyphicon,
         InputGroup,
         Navbar,
         Col,
         Nav
} from 'react-bootstrap';

import { store } from '../index.js';

import { toggleSidebar } from '../actions';

class TopNav extends Component {
    render() {
        return (
            <Navbar >
                <Col xs={7}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>org name</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Col>
                <Col xs={3}>
                    <Nav pullRight>
                        {/* <Navbar.Form pullRight>
                            <InputGroup>
                                <FormControl type="text" placeholder="Search" />
                                <InputGroup.Button>
                                    <Button><Glyphicon glyph="search"/></Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </Navbar.Form> */}
                    </Nav>
                </Col>
                <Col xs={2}>
                    <Button onClick={() => store.dispatch(toggleSidebar())}>
                        <Glyphicon glyph="menu-hamburger"/>
                    </Button>
                </Col>
            </Navbar>
        );
    }
}

export default TopNav