import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Home(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Flags of the world</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    <Nav.Link><Link to = "/register">Register</Link></Nav.Link>
                    <Nav.Link><Link to="/flagslist">Flags</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="search" className="mr-sm-2"></FormControl>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
