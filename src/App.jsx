import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Theme from './components/settings/Theme';
import Home from './routes/Home';
import Creation from './routes/Creation';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Theme>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/creation" component={Creation} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Theme>
    </Router>
  );
}

export default App;
