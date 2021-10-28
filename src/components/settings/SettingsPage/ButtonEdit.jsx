import React from 'react';
import styled from 'styled-components';

const ButtonEdit = () => (
  <EditContainer>
    <EditButton>Edit</EditButton>
  </EditContainer>
);

const EditContainer = styled.div`
display: flex;
justify-content: center;

`;

const EditButton = styled.button`

`;

export default ButtonEdit;
