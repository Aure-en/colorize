import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getUser } from '../../../selectors/user';

const CurrentUser = () => {
  const currentUsername = useSelector(getUser);

  return (
    <CurrentText>{currentUsername}</CurrentText>
  );
};

const CurrentText = styled.div`
display: flex;
justify-content: center;
font-size: 1.8em;
padding-right: 2em;
`;

export default CurrentUser;
