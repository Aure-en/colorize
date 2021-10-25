import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const LeftNav = () => (
  <Nav>
    <Searchbar to="/">
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
    background: #FFFF;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 0.5rem calc(100vw - 1000px) /2);
`;
const NavLink = styled(Link)`
color: #000;
display: flex;
align-items: center;
flex-direction: column;
text-decoration: none;
padding: 0 1rem;
padding-bottom: 1em;
height: 100%;
cursor: pointer;

&.active {
    color: #15cdfc;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: start;
flex-direction: column;
margin-right: -24px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const Searchbar = styled.div`
padding-bottom: 25px;
display: flex;
`;

const Input = styled.input`
height: 40px;
`;

const Btn = styled.button`
display: flex;

`;

const Line = styled.div`
padding: 10px;
width: 100%;
border-top: 2px solid grey;
`;

export default LeftNav;
