import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from './color/Color';

const Palette = ({
  palette,
  direction,
}) => (
  <Wrapper
    $direction={direction}
    list={palette}
  >
    {palette.colors.map((color, index) => (
      <Color key={index} color={color} />
    ))}
  </Wrapper>
);

Palette.propTypes = {
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

Palette.defaultProps = {
  direction: 'horizontal',
};

const Wrapper = styled.div`
  display: flex;
  grid-gap: 1rem;
  width: 100%;
  flex: 1;

  & > * {
    flex: 1;
  }
  
  @media all and (min-width: 900px) {
    flex-direction: ${(props) => (props.$direction === 'vertical' ? 'column' : 'row')};
  }
`;

export default Palette;
