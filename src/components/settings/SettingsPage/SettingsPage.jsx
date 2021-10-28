import React from 'react';
import styled from 'styled-components';
import CurrentUserName from './CurrentUserName';
import CurrentEmail from './CurrentEmail';
import Password from './Password';
import ButtonEdit from './ButtonEdit';

const SettingsPage = () => (
  <SettingsContainer>
    <CurrentUserName />
    <CurrentEmail />
    <Password />
    <ButtonEdit />
  </SettingsContainer>
);

const SettingsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-self: center;
padding: 12em;
width: 90%;
height: 90%;
background-color: ${(props) => props.theme.background_color_Settings};
@media screen and (min-width: 768px) {
   flex-direction: column;
   }
`;

export default SettingsPage;
