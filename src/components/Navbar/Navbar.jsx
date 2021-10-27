import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LeftNav from './LeftNav';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const Navbar = () => (
  <Nav>
    <Logo className="logo" />
    <LeftNav />
    <Burger />
  </Nav>
);

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid ${(props) => props.theme.background};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.background_color_Nav};
  
  .logo {
    padding-top: 10px;
  }
`;

export default Navbar;
