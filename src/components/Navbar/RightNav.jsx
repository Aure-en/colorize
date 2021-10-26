import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const RightNav = ({ open }) => (
  <Ul open={open}>
    <NavLink to="/" className="navlink" activeStyle>Home</NavLink>
    <NavLink to="/creation" className="navlink" activeStyle>Création</NavLink>
    <NavLink to="/signup" className="navlink" activeStyle>Sign Up</NavLink>
    <NavLink to="/signin" className="navlink" activeStyle>Sign In</NavLink>
  </Ul>
);

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

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
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .navlink {
      color: #fff;
      text-align: center;
      font-size: 2rem;
    }
  }
`;

export default RightNav;
