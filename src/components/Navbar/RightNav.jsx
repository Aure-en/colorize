import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const RightNav = ({ open }) => (
  <Ul open={open}>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><NavLink to="/creation">Création</NavLink></li>
    <li><NavLink to="/signup">Sign Up</NavLink></li>
    <li><NavLink to="/signin">Sign In</NavLink></li>
  </Ul>
);

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

export default RightNav;
