import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';

import Collection from './routes/Collection';
import Collections from './routes/Collections';
import Creation from './routes/Creation';
import Generate from './routes/Generate';
import Home from './routes/Home';
import Palette from './routes/Palette';
import Profile from './routes/Profile';
import Settings from './routes/Settings';
import NotFound from './routes/NotFound';

import Copies from './components/Copy/Copies';
import Modals from './components/Shared/Modal/Modals';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Theme from './components/Settings/Theme';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Theme>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path={['/', '/palettes', '/themes/:themeId']} component={Home} />
            <Route exact path="/collections" component={Collections} />
            <Route exact path="/collections/:collectionId" component={Collection} />
            <Route exact path="/creation" component={Creation} />
            <Route exact path="/generate" component={Generate} />
            <Route exact path="/palettes/:paletteId" component={Palette} />
            <Route exact path="/users/:userId" component={Profile} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/settings" component={Settings} />
            <Route component={NotFound} />
          </Switch>
          <Copies />
          <Modals />
        </Wrapper>
      </Theme>
    </Router>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary}
`;
export default App;
