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
  position absolute;
  left: 80px;
  top: 13px;
  font-size: 25px;

  .left {
    float: left;
  }
`;

export default LeftNav;
