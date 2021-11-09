import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getIsLoggedIn, getUser } from './selectors/user';
import { fetchThemes } from './actions/themes';

import GlobalStyles from './styles/globalStyles';

import { fetchCollections } from './actions/favorite';

import EntryRoute from './routes/types/EntryRoute';

import Collection from './routes/Collection';
import Collections from './routes/Collections';
import Creation from './routes/Creation';
import Generate from './routes/Generate';
import Home from './routes/Home';
import Theme from './routes/Theme';
import Palette from './routes/Palette';
import Profile from './routes/Profile';
import Settings from './routes/Settings';
import Search from './routes/Search';
import Palettes from './routes/Palettes';

import Copies from './components/Copy/Copies';
import Modals from './components/Modal/Modals';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import NotFound from './components/Error/NotFound';
import ThemeProvider from './components/Settings/Theme';
import Toast from './components/Shared/Toast';

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(fetchThemes());
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCollections());
    }
  }, [isLoggedIn, user]);

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/palettes" component={Palettes} />
            <Route exact path="/themes/:themeId" component={Theme} />
            <Route exact path="/collections" component={Collections} />
            <Route exact path="/collections/:collectionId" component={Collection} />
            <Route exact path="/creation" component={Creation} />
            <Route exact path="/generate" component={Generate} />
            <Route exact path="/palettes/:paletteId" component={Palette} />
            <Route exact path="/users/:userId" component={Profile} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/settings" component={Settings} />
            <EntryRoute exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
          <Copies />
          <Modals />
          <Toast />
        </Wrapper>
      </ThemeProvider>
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
