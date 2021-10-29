import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const RightNav = ({ open }) => (
  <Ul open={open}>
    <NavLinkBetween>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/creation" className="navlink">Creation</NavLink>
    </NavLinkBetween>
    <NavLinkBetween>
      <NavLink to="/signup" className="navlink">Sign Up</NavLink>
      <NavLink to="/signin" className="navlink">Sign In</NavLink>
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
    color: white;

    &:active {
      text-decoration : underline;
    }
    
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.background_color_Nav};
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
z-index: 20;

@media (min-width: 768px) {
  flex-direction: row;
}
`;

export default RightNav;
