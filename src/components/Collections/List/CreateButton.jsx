import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { openModal } from '../../../actions/modals';

import { ReactComponent as IconCreate } from '../../../assets/icons/collections/create.svg';

const CreateButton = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(openModal('createCollection'))}>
      <IconCreate />
      Create a new collection
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${(props) => props.theme.textPrimary}70;
  width: 15rem;
  height: 13rem;
  padding: 0;
  color: ${(props) => props.theme.textPrimary}
`;

export default CreateButton;
