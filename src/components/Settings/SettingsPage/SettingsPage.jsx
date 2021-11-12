import React from 'react';
import styled from 'styled-components';

import CurrentUsername from './CurrentUsername';
import CurrentEmail from './CurrentEmail';
import Password from './Password';

import ModalUsername from './ModalUsername';
import ModalPassword from './ModalPassword';
import ModalEmail from './ModalEmail';

import Theme from './Theme';
import Format from './Format';

import DeleteAccount from './DeleteAccount/DeleteAccount';

const SettingsPage = () => (
  <SettingsContainer>
    <Heading>Settings</Heading>

    <section>
      <Subheading>Preferences</Subheading>

      <Field>
        <CurrentUsername />
        <ModalUsername />
      </Field>

      <Field>
        <CurrentEmail />
        <ModalEmail />
      </Field>

      <Field>
        <Password />
        <ModalPassword />
      </Field>
    </section>

    <section>
      <Subheading>Appearance</Subheading>
      <Theme />
    </section>

    <section>
      <Subheading>Format</Subheading>
      <Format />
    </section>

    <section>
      <Subheading>Account Removal</Subheading>
      <DeleteAccount />
    </section>
  </SettingsContainer>
);

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;
  height: 90%;
  max-width: 1100px;
  background-color: ${(props) => props.theme.background};
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.primaryText}50;
  z-index: 2;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Subheading = styled.h2`
  font-weight: 400;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.primaryText};
  border-bottom: 1px solid ${(props) => props.theme.primaryText};
  margin-bottom: 1rem;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 0;

  @media screen and (min-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export default SettingsPage;
