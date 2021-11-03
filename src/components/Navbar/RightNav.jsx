import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const RightNav = ({ open }) => (
  <Ul open={open}>
    <NavLinkBetween>
      <NavLink to="/" exact className="navlink">Home</NavLink>
      <NavLink to="/creation" exact className="navlink">Creation</NavLink>
    </NavLinkBetween>
    <NavLinkBetween>
      <NavLink to="/signup" exact className="navlink">Sign Up</NavLink>
      <NavLink to="/signin" exact className="navlink">Sign In</NavLink>
    </NavLinkBetween>
  </Ul>
);

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .navlink {
    padding: 18px 10px;
    text-decoration: none;
    color: ${(props) => props.theme.textOnPrimary};

    &.active {
      font-weight: 500;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.textPrimary};
    position: fixed;
    justify-content: start;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    z-index: 20;

    .navlink {
      text-align: center;
      font-size: 2rem;
      color: ${(props) => props.theme.background};
    }
  }
`;

const NavLinkBetween = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  z-index: 20;
  color: ${(props) => props.theme.textOnPrimary};

@media (min-width: 768px) {
  flex-direction: row;
}
`;

export default RightNav;
