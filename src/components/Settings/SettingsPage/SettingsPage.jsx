import React from 'react';
import styled from 'styled-components';
import CurrentUsername from './CurrentUsername';
import CurrentEmail from './CurrentEmail';
import Password from './Password';
import ModalUsername from './ModalUsername';
import ModalPassword from './ModalPassword';
import ModalEmail from './ModalEmail';

const SettingsPage = () => (
  <SettingsContainer>
    <ModalContainer>
      <CurrentUsername />
      <ModalUsername />
    </ModalContainer>
    <ModalContainer>
      <CurrentEmail />
      <ModalEmail />
    </ModalContainer>
    <ModalContainer>
      <Password />
      <ModalPassword />
    </ModalContainer>
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
background-color: ${(props) => props.theme.backgroundColorSettings};
@media screen and (max-width: 768px) {
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
}
`;

const ModalContainer = styled.div`
display: flex;
justify-content: center;
@media screen and (max-width: 768px) {
  justify-content: space-between;
 }
`;

export default SettingsPage;
