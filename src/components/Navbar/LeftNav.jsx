import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const LeftNav = () => (
  <Title>
    <TitleBrand to="/">Colorize</TitleBrand>
  </Title>
);

const Title = styled.div`
  color: ${(props) => props.theme.textOnPrimary};
  align-items: center;
  font-size: 1.5px;
  font-weight: 600;
  padding-left: 5px;
  display: none;

  @media (max-width: 1024px) {
    color: ${(props) => props.theme.textPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    font-size: 2rem;
  }
`;

const TitleBrand = styled(Link)`
  color: ${(props) => props.theme.textOnPrimary};
`;

export default LeftNav;
