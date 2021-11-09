import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getEmail } from '../../../selectors/user';

const CurrentEmail = () => {
  const currentEmail = useSelector(getEmail);

  return (
    <CurrentEmailContainer>{currentEmail}</CurrentEmailContainer>
  );
};

const CurrentEmailContainer = styled.div`
display: flex;
font-size: 1.8em;
padding-right: 2em;
`;

export default CurrentEmail;
