import React from 'react';
import { Link } from 'react-router-dom';

function NotFound({ location }) {
    return (
        <div className="mt-3 text-center">
            <h6>Looking for something?</h6>
            
            <p>We're sorry, but the page you're trying to find doesn't exist.</p>

            <Link to="/">Go to Home</Link>

            {/* <h3>No match for <code>{location.pathname}</code></h3> */}
        </div>
    );
}

export default NotFound;