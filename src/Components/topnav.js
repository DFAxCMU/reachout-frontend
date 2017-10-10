import React, { Component } from 'react';
import { Button,
         FormControl,
         Glyphicon,
         InputGroup,
         Navbar,
         Col,
         Nav
} from 'react-bootstrap';

export default class TopNav extends Component {
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
                <Col xs={5}>
                    <Nav pullRight>
                        <Navbar.Form pullRight>
                            <InputGroup>
                                <FormControl type="text" placeholder="Search" />
                                <InputGroup.Button>
                                    <Button><Glyphicon glyph="search"/></Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </Navbar.Form>
                    </Nav>
              </Col>
            </Navbar>
        );
    }
}
