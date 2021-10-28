import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetPalette, setShades } from '../../../actions/palette';
import { ReactComponent as IconReset } from '../../../assets/icons/palette/reset.svg';

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      onClick={() => {
        dispatch(resetPalette());
        dispatch(setShades());
      }}
    >
      <IconReset />
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export default Reset;
