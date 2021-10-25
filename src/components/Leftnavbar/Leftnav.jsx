/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../Assets/Icons/Search.svg';

const Leftnav = () => (
  <>
    <Nav>

      <Searchbar to="/">
        <Input type="Search" placeholder="Search" />
        <Btn>
          <SearchIcon />
        </Btn>
      </Searchbar>
      <NavMenu>
        <NavLink to="/Popular" activeStyle>
          Popular
        </NavLink>
        <NavLink to="/Saved" activeStyle>
          Saved
        </NavLink>
        <NavLink to="/New" activeStyle>
          New
        </NavLink>
        <Line />
        <NavLink to="/All" activeStyle>
          All
        </NavLink>
        <NavLink to="/Generated" activeStyle>
          Generated
        </NavLink>
        <NavLink to="/User-submissions" activeStyle>
          User Submissions
        </NavLink>
        <Line />
        <NavLink to="/Flowery" activeStyle>
          Flowery
        </NavLink>
        <NavLink to="/Forest" activeStyle>
          Forest
        </NavLink>
        <NavLink to="/Light" activeStyle>
          Light
        </NavLink>
        <NavLink to="/Dark" activeStyle>
          Dark
        </NavLink>
        <NavLink to="/Pastel" activeStyle>
          Pastel
        </NavLink>
        <NavLink to="/Cityscape" activeStyle>
          Cityscape
        </NavLink>
        <NavLink to="/Nature" activeStyle>
          Nature
        </NavLink>
        <NavLink to="/Holographic" activeStyle>
          Holographic
        </NavLink>
      </NavMenu>
    </Nav>
  </>
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

const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    
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

export default Leftnav;
