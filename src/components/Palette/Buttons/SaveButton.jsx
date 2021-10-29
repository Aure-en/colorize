import React from 'react';
import styled from 'styled-components';

const SaveButton = () => (
  <Button type="button">
    Save
  </Button>
);

const Button = styled.button`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  margin-left: 1rem;
  justify-self: end;

  &:hover {
    background: ${(props) => props.theme.primary};
  }
`;

export default SaveButton;
