import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Theme from './components/settings/Theme';
import Home from './routes/Home';
import Creation from './routes/Creation';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Settings from './routes/Settings';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Theme>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/creation" component={Creation} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Wrapper>
      </Theme>
    </Router>
  );
}

const Wrapper = styled.div`
min-height: 100vh;
width: 100vw;
display: grid;
grid-template-rows: auto 1fr;
`;
export default App;
