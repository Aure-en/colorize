import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getShadesNumber } from '../../../../selectors/palette';
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
  align-self: center;
  font-size: 1.5rem;
  grid-row: 1;
  grid-column: 1;

  @media all and (min-width: 900px) {
    flex-direction: column;
    grid-row: 2;
  }
`;

export default Buttons;
