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
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Theme from './components/Settings/Theme';
import Copies from './components/Copy/Copies';

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
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
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
