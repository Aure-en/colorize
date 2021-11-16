import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getUser } from '../../../selectors/user';

const CurrentUser = () => {
  const currentUsername = useSelector(getUser)?.username;

  return (
    <Wrapper>
      <strong>Username</strong>
      <div>{currentUsername}</div>
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

export default CurrentUser;
