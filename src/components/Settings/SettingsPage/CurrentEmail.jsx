import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getEmail } from '../../../selectors/user';

const CurrentEmail = () => {
  const currentEmail = useSelector(getEmail);

  return (
    <Wrapper>
      <strong>Email</strong>
      <div>{currentEmail}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > strong {
    font-weight: 500;
  }
`;

export default CurrentEmail;
