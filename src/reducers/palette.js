import Color from 'color';
import { SET_SHADES } from '../actions/palette';
import palettesData from '../data/palettes';

export const initialState = {
  palette: palettesData[0],
  shadesNumber: 2,
  shades: {
    light: [],
    dark: [],
  },
  loading: 'idle',
};

const palette = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SHADES: {
      const lighterShades = getLighterShades(state.palette, state.shadesNumber);
      const darkerShades = getDarkerShades(state.palette, state.shadesNumber);

      return {
        ...state,
        shades: {
          light: lighterShades,
          dark: darkerShades,
        },
      };
    }

    default:
      return state;
  }
};

const getLighterShades = (palette, shadesNumber) => {
  const lighterShades = [];
  for (let step = 1; step <= shadesNumber; step += 1) {
    lighterShades.unshift(
      palette.colors.map(
        (color) => getLighterShade(color, step),
      ),
    );
  }
  return lighterShades;
};

const getDarkerShades = (palette, shadesNumber) => {
  const darkerShades = [];
  for (let step = 1; step <= shadesNumber; step += 1) {
    darkerShades.unshift(
      palette.colors.map(
        (color) => getDarkerShade(color, step),
      ),
    );
  }
  return darkerShades;
};

const getLighterShade = (color, step) => {
  const colorObject = Color(color.hex);
  const luminosity = colorObject.hsl().array()[2];
  const lighter = colorObject.lightness(
    ((100 - luminosity) / (step + 1)) * step + luminosity,
  );

  return {
    rgb: lighter.rgb().array(),
    hex: lighter.hex(),
    hsl: lighter.hsl().array(),
    name: 'Color Name',
  };
};

const getDarkerShade = (color, step) => {
  const colorObject = Color.rgb(color.rgb);
  const luminosity = colorObject.hsl().array()[2];
  const darker = colorObject.lightness(
    luminosity - (luminosity / (step + 1)) * step,
  );

  return {
    rgb: darker.rgb().array(),
    hex: darker.hex(),
    hsl: darker.hsl().array(),
    name: 'Color Name',
  };
};

export const getPalette = (state) => state.palette.palette;

export const getShades = (state) => state.palette.shades;

export default palette;
