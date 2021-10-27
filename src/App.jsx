import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Theme from './components/settings/Theme';
import Home from './routes/Home';
import Creation from './routes/Creation';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Theme>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/creation" component={Creation} />
        </Switch>
      </Theme>
    </Router>
  );
}

export default App;
