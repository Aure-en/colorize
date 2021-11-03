import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as SearchMobileIcon } from '../../assets/icons/searchmobile.svg';

const LeftNav = () => (
  <Nav>
    <Searchbar to="/">
      <BtnMobile>
        <SearchMobileIcon className="btnMob" />
      </BtnMobile>
      <Input type="Search" placeholder="Search" />
      <Btn>
        <SearchIcon />
      </Btn>
    </Searchbar>
    <NavMenu>
      <NavLink to="/Popular">
        Popular
      </NavLink>
      <NavLink to="/Saved">
        Saved
      </NavLink>
      <NavLink to="/New">
        New
      </NavLink>
      <Line />
      <NavLink to="/All">
        All
      </NavLink>
      <NavLink to="/Generated">
        Generated
      </NavLink>
      <NavLink to="/User-submissions">
        User Submissions
      </NavLink>
      <Line />
      <NavLink to="/Flowery">
        Flowery
      </NavLink>
      <NavLink to="/Forest">
        Forest
      </NavLink>
      <NavLink to="/Light">
        Light
      </NavLink>
      <NavLink to="/Dark">
        Dark
      </NavLink>
      <NavLink to="/Pastel">
        Pastel
      </NavLink>
      <NavLink to="/Cityscape">
        Cityscape
      </NavLink>
      <NavLink to="/Nature">
        Nature
      </NavLink>
      <NavLink to="/Holographic">
        Holographic
      </NavLink>
    </NavMenu>
  </Nav>
);

const Nav = styled.nav`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Searchbar = styled.div`
  padding-bottom: 25px;
  display: flex;
  @media screen and (max-width: 768px) {
     align-self: center;
     margin-top: 2em;
  }
`;

const Input = styled.input`
  height: 40px;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    height: 30px;
    border: none;
   }
`;

const Btn = styled.button`
  display: flex;
  @media screen and (min-width: 768px) {
    display:none
   }
`;
const BtnMobile = styled.button`
  display: flex;
  @media screen and (max-width: 768px) {
    display:none
   }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.5rem 0;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${(props) => props.theme.primaryText} 50%,
    transparent 100%
  );
`;

export default LeftNav;
