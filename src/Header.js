import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <div className="container">
                <Navbar.Brand><Link to="/">React-Bootstrap</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/user">User</Link></Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
