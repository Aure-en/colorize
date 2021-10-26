import React from 'react';
import styled from 'styled-components';
import Shades from '../components/shades/Shades';
import GenerateButton from '../components/palette/buttons/GenerateButton';
import ResetButton from '../components/palette/buttons/ResetButton';
import SaveButton from '../components/palette/buttons/SaveButton';

const Creation = () => (
  <Wrapper>
    <Buttons>
      <GenerateButton />
      <ResetButton />
    </Buttons>
    <Shades />
    <SaveButton />
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  padding: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 2rem;
`;

export default Creation;
