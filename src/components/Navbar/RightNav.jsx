import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const RightNav = ({ open, setOpen }) => (
  <Ul open={open}>
    <NavLinkBetween>
      <NavLink to="/" exact className="navlink" onClick={() => setOpen(false)}>Home</NavLink>
      <NavLink to="/creation" exact className="navlink" onClick={() => setOpen(false)}>Creation</NavLink>
    </NavLinkBetween>
    <NavLinkBetween>
      <NavLink to="/Login" exact className="navlink" onClick={() => setOpen(false)}>Login</NavLink>
    </NavLinkBetween>
  </Ul>
);

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.bool.isRequired,
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
    color: ${(props) => props.theme.textPrimary};
    font-weight: 500;
    line-height: 1.5em;

    &.active {
      font-weight: 700;
    }
  }
  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background: ${(props) => props.theme.secondary};
    position: fixed;
    justify-content: start;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    width: 100%;
    padding-top: 3.5rem;
    z-index: 20;

    .navlink {
      text-align: center;
      font-size: 2rem;
      color: ${(props) => props.theme.textPrimary};
    }
  }
`;

const NavLinkBetween = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  z-index: 20;
  color: ${(props) => props.theme.textPrimary};

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default RightNav;
