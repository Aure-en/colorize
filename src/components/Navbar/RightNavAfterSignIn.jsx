import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/user';
import { clearCollections } from '../../actions/favorite';
import { getUser } from '../../selectors/user';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const RightNavAfterSignIn = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <Ul open={open}>
      <Searchbar to="/">
        <Input type="Search" placeholder="Search" />
        <Btn>
          <SearchIcon className="search-icon" />
        </Btn>
      </Searchbar>
      <NavLinkBetween>
        <NavLink to="/" exact className="navlink" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/creation" exact className="navlink" onClick={() => setOpen(false)}>Creation</NavLink>
        <NavLink to="/collections" exact className="navlink" onClick={() => setOpen(false)}>Collections</NavLink>
      </NavLinkBetween>
      <NavLinkBetween>
        <Username>Username</Username>
        <NavLink to={`/users/${user.id}`} exact className="navlink" onClick={() => setOpen(false)}>Profile</NavLink>
        <NavLink to="/settings" exact className="navlink" onClick={() => setOpen(false)}>Settings</NavLink>
        <button
          type="button"
          onClick={() => {
            dispatch(logout());
            dispatch(clearCollections());
            localStorage.clear();
          }}
          className="navlink"
        >
          Log Out

        </button>
      </NavLinkBetween>
    </Ul>
  );
};

RightNavAfterSignIn.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.bool.isRequired,
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
    color: ${(props) => props.theme.textOnPrimary};
    

    &.active {
      font-weight: 500;
    }
  }

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background: ${(props) => props.theme.textPrimary};
    
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
      text-align: center;
      font-size: 2rem;
      color: ${(props) => props.theme.background};
    }
  }
`;

const NavLinkBetween = styled.div`
  color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Searchbar = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    padding: 2rem 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.textOnPrimary}
  }
`;

const Input = styled.input`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    height: 60px;
    width: 70%;
    padding-left: 1rem;
    font-size: 1.5rem;
  }
`;

const Btn = styled.button`
  display: none;
  padding: 5px 5px;

  .search-icon {
    stroke: ${(props) => props.theme.background}
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Username = styled.p`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    font-size: 3rem;
    margin: 1rem;
    margin-top: 4rem;
    color: ${(props) => props.theme.textOnPrimary}
  }
`;

export default RightNavAfterSignIn;
