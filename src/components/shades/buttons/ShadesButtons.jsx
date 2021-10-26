import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getShadesNumber } from '../../../reducers/palette';
import DecrementShadesNumber from './DecrementShadesNumber';
import IncrementShadesNumber from './IncrementShadesNumber';

const Buttons = () => {
  const stepsNumber = useSelector(getShadesNumber);

  return (
    <Wrapper>
      <IncrementShadesNumber />
      {stepsNumber}
      <DecrementShadesNumber />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  grid-row: 1 / span 1;

  @media all and (min-width: 576px) {
    flex-direction: column;
    grid-row: initial;
  }
`;

export default Buttons;
