import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { openModal } from '../../../actions/modals';

const CreateButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      type="button"
      onClick={() => dispatch(openModal('createCollection'))}
    >
      Create a new collection
    </Button>
  );
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default CreateButton;
