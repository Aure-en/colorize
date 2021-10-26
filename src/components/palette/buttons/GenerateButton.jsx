import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconGenerate } from '../../../assets/icons/palette/generate.svg';
import { fetchPalette } from '../../../actions/palette';
import { getPaletteLoading } from '../../../reducers/palette';

const Generate = () => {
  const dispatch = useDispatch();
  const paletteLoading = useSelector(getPaletteLoading);

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() => {
          dispatch(fetchPalette());
        }}
        $rotate={paletteLoading === 'pending'}
        disabled={paletteLoading === 'pending'}
      >
        <IconGenerate />
      </Button>
    </Wrapper>
  );
};

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: ${(props) => props.theme.text_primary};
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  margin-left: 1rem;
  animation: ${(props) => props.$rotate
    && css`
      ${rotation} 2s infinite linear
    `};

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export default Generate;