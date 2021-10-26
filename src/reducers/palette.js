import {
  DECREMENT_SHADES,
  INCREMENT_SHADES,
  SET_SHADES,
  UPDATE_COLOR,
  LOCK_COLOR,
  UNLOCK_COLOR,
} from '../actions/palette';
import palettesData from '../data/palettes';
import {
  getLighterShades,
  getDarkerShades,
  getColorFromHex,
} from '../utils/colors';

export const initialState = {
  palette: {
    id: palettesData[0].id,
    colors: palettesData[0].colors.map((color, index) => ({
      ...color,
      id: index,
    })),
  },
  originalPalette: {
    id: palettesData[0].id,
    colors: palettesData[0].colors.map((color, index) => ({
      ...color,
      id: index,
    })),
  },
  locked: [null, null, null, null, null],
  shadesNumber: 2,
  shades: {
    light: [],
    dark: [],
  },
  loading: 'idle',
};

const palette = (state = initialState, action = {}) => {
  switch (action.type) {
    // Shades
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

    // Edit color
    case UPDATE_COLOR: {
      const newColor = getColorFromHex(action.color);
      const newPalette = { ...state.palette };
      newPalette.colors[action.index] = {
        ...newPalette.colors[action.index],
        ...newColor,
      };

      return {
        ...state,
        palette: newPalette,
      };
    }

    // Lock color
    case LOCK_COLOR: {
      const newLocked = [...state.locked];
      newLocked[action.index] = true;
      return {
        ...state,
        locked: newLocked,
      };
    }

    case UNLOCK_COLOR: {
      const newLocked = [...state.locked];
      newLocked[action.index] = null;
      return {
        ...state,
        locked: newLocked,
      };
    }

    default:
      return state;
  }
};

export const getPalette = (state) => state.palette.palette;

export const getShades = (state) => state.palette.shades;

export const getShadesNumber = (state) => state.palette.shadesNumber;

export const getLocked = (state) => state.palette.locked;

export default palette;
