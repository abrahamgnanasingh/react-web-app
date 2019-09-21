import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
