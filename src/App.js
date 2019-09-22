import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Container from 'react-bootstrap/Container';
// import Glyphicon from 'react-bootstrap/Glyphicon';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import TopNavbar from './components/TopNavbar';
import LeftSideNavbar from './components/LeftSideNavbar';
// import Home from './components/Home';
// import Settings from './components/Settings';
import PrivateRoutes from './components/PrivateRoutes';
// import AuthService from './services/AuthService';

function Main(props) {
  // debugger;
  return (
    <>
      {props.children}
      {/* <TopNavbar /> */}

      {/* <Container fluid>
        <div className="row">
          <LeftSideNavbar />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {props.children}
          </main>
        </div> 
      </Container> */}
    </>
  );
}

// function isLoggedIn() {
//   return AuthService.isAuthenticated;
// }

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PrivateRoute exact path="/" render={props => <Main><PrivateRoutes {...props} /></Main>} />

        <Route path="/login" component={Login} />

        {/* <Main>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/settings" component={Settings} />
          </Switch>
        </Main> */}

        {/* <Main><PrivateRoutes /></Main> */}
      </Router>
    </ErrorBoundary>
  );
}

export default App;
