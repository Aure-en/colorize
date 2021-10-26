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
  align-self: center;
  font-size: 1.5rem;

  @media all and (min-width: 576px) {
    flex-direction: column;
  }
`;

export default Buttons;
