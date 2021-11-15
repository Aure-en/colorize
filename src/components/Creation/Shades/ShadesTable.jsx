import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Palette from '../../Palette/Palette';
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
        hex: PropTypes.string,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired),
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired),
      }).isRequired,
    ).isRequired,
  }).isRequired,
  shades: PropTypes.shape({
    light: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          hex: PropTypes.string,
          rgb: PropTypes.arrayOf(PropTypes.number.isRequired),
          hsl: PropTypes.arrayOf(PropTypes.number.isRequired),
        }),
      ),
    ),
    dark: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          hex: PropTypes.string,
          rgb: PropTypes.arrayOf(PropTypes.number.isRequired),
          hsl: PropTypes.arrayOf(PropTypes.number.isRequired),
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
`;

export default ShadesTable;
