import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Container from 'react-bootstrap/Container';
// import Glyphicon from 'react-bootstrap/Glyphicon';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import TopNavbar from './components/TopNavbar';
import LeftSideNavbar from './components/LeftSideNavbar';
import Home from './components/Home';
import Settings from './components/Settings';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Route exact path="/login" component={Login} />

        <TopNavbar />

        <Container fluid>
          <div className="row">
            <LeftSideNavbar />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/settings" component={Settings} />
            </main>
          </div> 
        </Container>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
