import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Palette from '../../palette/Palette';
import ShadesLine from './ShadesLine';

const ShadesTable = ({
  mainPalette,
  shades,
}) => (
  <Wrapper>
    {shades.light.map(
      (palette, index) => palette.length > 0 && (
      <ShadesLine
        key={`${index}-${palette.reduce(
          (concat, color) => concat + color.hex,
          '',
        )}`}
        palette={palette}
      />
      ),
    )}

    {mainPalette.colors.length > 0 && (
      <Palette
        palette={mainPalette}
      />
    )}

    {shades.dark.map(
      (palette, index) => palette.length > 0 && (
      <ShadesLine
        key={`${index}-${palette.reduce(
          (concat, color) => concat + color.hex,
          '',
        )}`}
        palette={palette}
      />
      ),
    )}
  </Wrapper>
);

ShadesTable.propTypes = {
  mainPalette: PropTypes.shape({
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  shades: PropTypes.shape({
    light: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          hex: PropTypes.string.isRequired,
          rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
          hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        }),
      ),
    ),
    dark: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          hex: PropTypes.string.isRequired,
          rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
          hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        }),
      ),
    ),
  }).isRequired,
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
  grid-row: 2;
  grid-column: 1 / span 2;

  @media all and (min-width: 900px) {
    grid-column: 2 / span 2;
  }
`;

export default ShadesTable;
