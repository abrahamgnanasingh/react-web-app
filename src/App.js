import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
// import Glyphicon from 'react-bootstrap/Glyphicon';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './pages/Login';
import Main from './components/Main';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Job from './pages/Job';
import Technicians from './pages/Technicians';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
// import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route path="/not-found" component={NotFound} />

          <Route path="/">
            <Main>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/jobs/list" component={Jobs} />
                <PrivateRoute path="/jobs/:status(create|edit)/:id?" component={Job} />
                <PrivateRoute path="/technicians" component={Technicians} />
                <PrivateRoute path="/settings" component={Settings} />
                <Redirect to="/not-found" />
              </Switch>
            </Main>
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
