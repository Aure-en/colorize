import React from 'react';
import styled from 'styled-components';
import SettingsPage from '../components/Settings/SettingsPage/SettingsPage';

const Settings = () => (

  <Wrapper>
    <SettingsPage />
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

export default Settings;
