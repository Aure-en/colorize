import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Preview = ({ palettes }) => {
  // Display is different depending on the number of palettes
  // in the collection.
  const number = palettes.length;

  return (
    <Wrapper>
      <Palettes $number={number}>
        {palettes.slice(0, Math.min(number, 3)).map((palette, index) => (
          <Palette $isFirst={index === 0} $palette={palette.colors} />
        ))}
      </Palettes>
    </Wrapper>
  );
};

Preview.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          hex: PropTypes.string.isRequired,
          rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
          hsl: PropTypes.arrayOf(PropTypes.number).isRequired,
          hsv: PropTypes.arrayOf(PropTypes.number).isRequired,
          cmyk: PropTypes.arrayOf(PropTypes.number).isRequired,
        }),
      ),
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const getGridTemplateFromNumber = (number) => {
  switch (number) {
    case 1:
      return '1fr / 1fr';

    case 2:
      return '1fr / 1fr 1fr';

    default:
      return 'repeat(2, 1fr) / 1fr 1fr';
  }
};

const Wrapper = styled.div`
  width: 15rem;
  height: 13rem;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.text_secondary}70;
`;

const Palettes = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: ${(props) => getGridTemplateFromNumber(props.$number)};
  transition: transform 0.15s linear;

  & > div:first-child {
    grid-row: ${(props) => props.$number >= 3 && '1 / span 2'};
  }
`;

const Palette = styled.div`
  height: 100%;
  width: 100%;

  // Gradient to display different colors of the featured palettes.
  // First palette is displayed horizontally, other vertically.
  background: linear-gradient(
    ${(props) => (props.$isFirst ? 'to bottom' : 'to left')},
    ${(props) => props.$palette.map(
    (color, index) => (
      `${color.hex} ${(100 / props.$palette.length) * index}%,
       ${color.hex} ${(100 / props.$palette.length) * (index + 1)}%
       ${index !== props.$palette.length - 1 ? ',' : ''} `
    ),
  )});
`;

export default Preview;
