import React from 'react';

function NotFound({ location }) {
    return <h3>No match for <code>{location.pathname}</code></h3>;
}

export default NotFound;