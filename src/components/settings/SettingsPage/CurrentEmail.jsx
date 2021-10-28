import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getEmail } from '../../../reducers/user';

const CurrentEmail = () => {
  const currentEmail = useSelector(getEmail);

  return (
    <CurrentEmailContainer>{currentEmail}</CurrentEmailContainer>
  );
};

const CurrentEmailContainer = styled.div`
display: flex;
justify-content: center;

`;

export default CurrentEmail;
