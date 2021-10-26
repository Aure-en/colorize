import { DECREMENT_SHADES, INCREMENT_SHADES, SET_SHADES } from '../actions/palette';
import palettesData from '../data/palettes';
import { getLighterShades, getDarkerShades } from '../utils/colors';

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

    case INCREMENT_SHADES:
      return {
        ...state,
        shadesNumber: state.shadesNumber + 1,
      };

    case DECREMENT_SHADES:
      return {
        ...state,
        shadesNumber: state.shadesNumber - 1,
      };

    default:
      return state;
  }
};

export const getPalette = (state) => state.palette.palette;

export const getShades = (state) => state.palette.shades;

export const getShadesNumber = (state) => state.palette.shadesNumber;

export default palette;
