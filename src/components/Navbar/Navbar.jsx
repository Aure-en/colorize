import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const Navbar = () => (
  <Nav>
    <Logo />
    <Burger />
  </Nav>
);

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    margin: 5px;
  }
`;

export default Navbar;
