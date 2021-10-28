import React from 'react';
import styled from 'styled-components';

const data = [{ name: 'password' }];

const Password = () => (

  <PasswordContainer>{data.map((password) => <p>{password.name}</p>)}</PasswordContainer>

);

const PasswordContainer = styled.div`
display: flex;
justify-content: center;

`;

export default Password;
