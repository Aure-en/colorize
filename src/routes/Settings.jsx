import React from 'react';
import styled from 'styled-components';

import SettingsPage from '../components/Settings/SettingsPage/SettingsPage';
import Triangles from '../assets/preview/Triangles';

const Settings = () => (
  <Wrapper>
    <Background>
      <Triangles />
    </Background>
    <SettingsPage />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

export default Settings;
