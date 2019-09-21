import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import Settings from './components/Settings';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Container fluid className="pL0 pR0">
          <Row>
            <Col md={12}>
              <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                {/* <Navbar.Brand href="#home">React Web App</Navbar.Brand> */}
                <Link to="/" className="navbar-brand">React Web App</Link>
                
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
                      <Link to="/settings" role="tab" tabIndex="-1" className="nav-link">Settings</Link>
                    </Form>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
          <Row className="pT5">
            <Col md={12}>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
            </Col>
          </Row>
        </Container>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
