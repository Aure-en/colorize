import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Shade from './Shade';

const ShadesLine = ({ palette, main, direction }) => (
  <Wrapper $main={main} $direction={direction}>
    {palette.map((color, index) => (
      <Shade
        key={`${index}-${color.hex}`}
        color={color}
      />
    ))}
  </Wrapper>
);

ShadesLine.propTypes = {
  palette: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
      rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    }).isRequired,
  ).isRequired,
  main: PropTypes.bool,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

ShadesLine.defaultProps = {
  main: false,
  direction: 'horizontal',
};

const Wrapper = styled.div`
  display: flex;
  grid-gap: 1rem;
  width: 100%;
  flex: ${(props) => props.$main && '1'};
  & > * {
    flex: 1;
  }
  @media all and (min-width: 600px) {
    flex-direction: ${(props) => (props.$direction === 'vertical' ? 'column' : 'row')};
  }
`;

export default ShadesLine;
