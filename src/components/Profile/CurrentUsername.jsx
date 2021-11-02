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
margin-top: 2em;
margin-left: 1em;
@media screen and (max-width: 768px) {
  display: flex;
  width: 100%;
  margin-left: 0;
  justify-content: center;
   }
`;

export default CurrentUser;
