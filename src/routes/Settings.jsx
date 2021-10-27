import React from 'react';
import styled from 'styled-components';

const Settings = () => (

  <Wrapper>
    <BackgroundSettings />
  </Wrapper>

);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
     }
`;

const BackgroundSettings = styled.div`
display: flex;
align-self: center;
width: 90%;
height: 90%;
background-color: #C3CFD9;

`;

export default Settings;
