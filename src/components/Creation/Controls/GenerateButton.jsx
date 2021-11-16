import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { getMainPalette } from '../../../selectors/palette';
import { setMainPalette, setOriginalPalette, setShades } from '../../../actions/palette';

import {
  fetchRandomImage, createImageElem, extractFromImage, removeImageElem,
} from '../../../utils/extractColors';

import { ReactComponent as IconGenerate } from '../../../assets/icons/palette/generate.svg';

const Generate = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const mainPalette = useSelector(getMainPalette);

  const generateRandomPalette = async () => {
    setLoading(true);
    const src = await fetchRandomImage();
    const imageElem = createImageElem(src);
    const afterExtraction = (palette) => {
      const newPalette = {
        id: null,
        colors: palette.map((color, index) => ({ ...color, id: index })),
      };

      dispatch(setMainPalette(newPalette));
      dispatch(setOriginalPalette(newPalette));
      dispatch(setShades(palette));
      removeImageElem(imageElem);
      setLoading(false);
    };
    extractFromImage(imageElem, mainPalette.colors.length, afterExtraction);
  };

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={generateRandomPalette}
        $rotate={loading}
        disabled={loading}
        title="Generate palette"
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
  color: ${(props) => props.theme.textPrimary};
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  animation: ${(props) => props.$rotate
    && css`
      ${rotation} 2s infinite linear
    `};

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default Generate;
