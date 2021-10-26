import React from 'react';
import styled from 'styled-components';
import Palette from '../palette/Palette';
import ShadesLine from './ShadesLine';

const Shades = ({
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

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-gap: 1rem;
  width: 100%;
  grid-row: 2;
  grid-column: 1 / span 2;
  @media all and (min-width: 576px) {
    grid-row: initial;
    grid-column: initial;
  }
`;

export default Shades;
