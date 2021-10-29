import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors/user';

const CurrentUser = () => {
  const currentUsername = useSelector(getUser);

  return (
    <CurrentText>{currentUsername}</CurrentText>
  );
};

const CurrentText = styled.div`
display: flex;
font-size: 1.8em;
padding-top: 2em;
padding-left: 2em;
`;

export default CurrentUser;
