import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AuthService from '../services/AuthService';

class TopNavbar extends Component {
    logout(e) {
        e.preventDefault();

        AuthService.signout(() => this.props.history.push("/login"));
    }

    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                {/* <Navbar.Brand href="#home">React Web App</Navbar.Brand> */}
                <Link to="/" className="navbar-brand">React Web</Link>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            {/* <Button variant="outline-light">Search</Button> */}

                            <Link to="/settings" role="tab" tabIndex="-1" className="nav-link mr-2" title="Settings">
                                <FontAwesomeIcon icon={faWrench} />
                            </Link>
                            <a href="/logout" role="tab" tabIndex="-1" className="nav-link" onClick={e => this.logout(e)} title="Sign out">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </a>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

TopNavbar = withRouter(TopNavbar);

export default TopNavbar;