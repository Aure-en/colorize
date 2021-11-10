import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LeftNav from './LeftNav';
import Logo from '../../assets/Icons/Logo';
import Switch from './Switch';
import DropboxNav from './DropboxNav';
import useWindowSize from '../../hooks/shared/useWindowSize';

const Navbar = () => {
  const windowSize = useWindowSize();

  return (
    <Nav>
      {windowSize.width > 1024 && <Logo />}
      <Burger />
      <LeftNav />
      <Switch />
      <DropboxNav />
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.primary};
`;

export default Navbar;
