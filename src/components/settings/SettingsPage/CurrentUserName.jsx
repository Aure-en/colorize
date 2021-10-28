import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getUser } from '../../../reducers/user';

const CurrentUser = () => {
  const currentUsername = useSelector(getUser);

  return (
    <CurrentText>{currentUsername}</CurrentText>
  );
};

const CurrentText = styled.div`
display: flex;
`;

export default CurrentUser;