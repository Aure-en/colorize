import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Header} />
      </Switch>
    </Router>
  );
}

export default App;
