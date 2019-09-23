import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
// import Glyphicon from 'react-bootstrap/Glyphicon';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import Main from './components/Main';
import Home from './pages/Home';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
// import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route path="/">
            <Main>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/settings" component={Settings} />
            </Main>
          </Route>

          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
