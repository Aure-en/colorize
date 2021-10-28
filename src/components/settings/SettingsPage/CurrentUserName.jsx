import React from 'react';
import styled from 'styled-components';

const data = [{ name: 'username' }];

const CurrentUser = () => (

  <CurrentUserName>{data.map((user) => <p>{user.name}</p>)}</CurrentUserName>

);

const CurrentUserName = styled.div`
display: flex;
justify-content: center;

`;

export default CurrentUser;
