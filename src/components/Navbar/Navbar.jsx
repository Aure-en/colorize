import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LeftNav from './LeftNav';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import Switch from './Switch';
import DropboxNav from './DropboxNav';

const Navbar = () => (
  <Nav>
    <Logo className="logo" />
    <Burger className="burger" />
    <LeftNav />
    <Switch />
    <DropboxNav />
  </Nav>
);

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid ${(props) => props.theme.background};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.backgroundColorNav};

  .logo {
      padding-top: 10px;
  }

  @media (max-width: 768px) {
      .logo {
          display: none;
      }
  }
  `;

export default Navbar;
