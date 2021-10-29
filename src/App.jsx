import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';

import Home from './routes/Home';
import Creation from './routes/Creation';
import Generate from './routes/Generate';
import Settings from './routes/Settings';
import Collections from './routes/Collections';

import Navbar from './components/Navbar/Navbar';
import Theme from './components/settings/Theme';
import Signin from './components/Signin/Signin';
import Copies from './components/copy/Copies';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Theme>
        <Wrapper>
          <Navbar />
          <Copies />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/creation" component={Creation} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/generate" component={Generate} />
            <Route exact path="/collections" component={Collections} />
          </Switch>
        </Wrapper>
      </Theme>
    </Router>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;
export default App;
