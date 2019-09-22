import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService';
import logo from '../logo.svg';

class Login extends Component {
    state = { redirectToReferrer: AuthService.isAuthenticated };

    handleLogin(e) {
        e.preventDefault();
        
        AuthService.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
        // debugger;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <>
                <form className="form-signin" onSubmit={e => this.handleLogin(e)}>
                    <img className="mb-4" src={logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required={false} autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required={false} autoComplete="on" />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; All rights reserved</p>
                </form>
            </>
        );
    }
}

export default Login;