import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn } from '../../../selectors/user';
import { openModal } from '../../../actions/modals';

const SaveButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleClick = () => {
    if (!isLoggedIn) {
      dispatch(openModal('auth'));
    } else {
      // If there is no paletlte id
    }
  };

  return (
    <Button type="button" onClick={handleClick}>
      Save
    </Button>
  );
};

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
    background: ${(props) => props.theme.primaryText};
  }
`;

export default SaveButton;
