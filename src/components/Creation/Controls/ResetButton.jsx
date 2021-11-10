import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { resetPalette, setShades } from '../../../actions/palette';
import { getOriginalPalette } from '../../../selectors/palette';
import { ReactComponent as IconReset } from '../../../assets/Icons/palette/reset.svg';

const Reset = () => {
  const dispatch = useDispatch();
  const originalPalette = useSelector(getOriginalPalette);

  return (
    <Button
      type="button"
      onClick={() => {
        dispatch(resetPalette());
        dispatch(setShades(originalPalette));
      }}
      title="Undo changes"
    >
      <IconReset />
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  color: ${(props) => props.theme.textPrimary};
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  transition: color 0.2s ease-out;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default Reset;
