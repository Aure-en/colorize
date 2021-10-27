import React from 'react';
import styled from 'styled-components';

const LeftNav = () => (
  <Title>
    <div className="left">Colorize</div>
  </Title>
);

const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  display: none;
  font-size: 25px;
  padding-left: 5px;

  .left {
    float: left;
  }

  @media (min-width: 768px) {
    display: flex;
  }


`;

export default LeftNav;
