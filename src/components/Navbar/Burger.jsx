import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../selectors/user';

import RightNav from './RightNav';
import RightNavAfterSignIn from './RightNavAfterSignIn';

const Burger = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Barre />
        <Barre />
        <Barre />
      </StyledBurger>
      {isLoggedIn
        ? <RightNavAfterSignIn open={open} setOpen={setOpen} />
        : <RightNav open={open} setOpen={setOpen} />}
    </>
  );
};

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 25;
    position: relative;
    margin-left: 2px;
  }
`;

const Barre = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${(props) => props.theme.textOnPrimary};
  color: ${(props) => props.theme.textPrimary};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

export default Burger;
