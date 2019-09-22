import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Settings from './Settings';

class PrivateRoutes extends Component {
    render() {
        return (
            <Switch>
                <PrivateRoute path="/" component={Home} />
                <PrivateRoute path="/settings" component={Settings} />
            </Switch>
        )
    }
}

export default PrivateRoutes;