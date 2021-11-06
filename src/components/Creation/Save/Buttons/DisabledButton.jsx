import React from 'react';
import styled from 'styled-components';

const DisabledButton = () => (
  <Button type="button" disabled>
    Save
  </Button>
);

const Button = styled.button`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.textSecondary};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  margin-left: 1rem;
  justify-self: end;

  &:hover {
    background: ${(props) => props.theme.primaryText};
  }
`;

export default DisabledButton;
