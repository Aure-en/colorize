import React from 'react';
import styled from 'styled-components';

const LeftNav = () => (
  <Title>
    <div className="left">Colorize</div>
  </Title>
);

const Title = styled.div`
  color: ${(props) => props.theme.textOnPrimary};
  align-items: center;
  font-size: 1.5px;
  padding-left: 5px;
  display: none;

  @media (max-width: 768px) {
    color: ${(props) => props.theme.background};
    display: flex;
    z-index: 20;
    font-size: 2rem;
  }
`;

export default LeftNav;
