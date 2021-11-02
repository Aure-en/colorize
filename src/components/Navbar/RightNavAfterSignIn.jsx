import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchMobileIcon } from '../../assets/icons/searchmobile.svg';

const RightNavAfterSignIn = ({ open }) => (
  <Ul open={open}>
    <Searchbar to="/">
      <Input type="Search" placeholder="Search" />
      <BtnMobile>
        <SearchMobileIcon />
      </BtnMobile>
    </Searchbar>
    <NavLinkBetween>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/creation" className="navlink">Creation</NavLink>
      <NavLink to="/collection" className="navlink">Collection</NavLink>
    </NavLinkBetween>
    <NavLinkBetween>
      <Username>Username</Username>
      <NavLink to="/profile" className="navlink">Profile</NavLink>
      <NavLink to="/settings" className="navlink">Settings</NavLink>
      <NavLink to="/" className="navlink">Sign Out</NavLink>
    </NavLinkBetween>

  </Ul>
);

RightNavAfterSignIn.propTypes = {
  open: PropTypes.bool.isRequired,
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  width: 100%;

  .navlink {
    padding: 18px 10px;
    text-decoration: none;
    color: white;

    &:active {
      text-decoration : underline;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.backgroundColorNav};
    position: fixed;
    justify-content: start;
    align-items: center;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    z-index: 20;

    .navlink {
      color: #fff;
      text-align: center;
      font-size: 2rem;
    }
  }
`;

const NavLinkBetween = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  `;

const Searchbar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    padding: 2rem 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.background}
  }
`;

const Input = styled.input`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 60px;
    width: 70%;
    padding-left: 1rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.backgroundColorNav}
  }
  `;

const BtnMobile = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
  `;

const Username = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 3rem;
    margin: 1rem;
    margin-top: 4rem;
    color: ${(props) => props.theme.background}
  }
  `;

export default RightNavAfterSignIn;
