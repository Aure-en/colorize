import React from 'react';
import styled from 'styled-components';
import CurrentUserName from './CurrentUserName';

const SettingsPage = () => (
  <SettingsContainer>
    <CurrentUserName />
  </SettingsContainer>
);

const SettingsContainer = styled.div`
display: flex;
justify-content: center;
align-self: center;
padding: 0.2em;
width: 90%;
height: 90%;
background-color: #C3CFD9;
@media screen and (min-width: 768px) {
   flex-direction: column;
   }
`;

export default SettingsPage;
