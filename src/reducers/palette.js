import {
  SET_PALETTE,
  RESET_PALETTE,
  DECREMENT_SHADES,
  INCREMENT_SHADES,
  SET_SHADE,
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
  getColorSteps,
} from '../utils/colors';

export const initialState = {
  // JSON.parse + JSON.stringify to recreate a new object
  // with nested arrays and objects with different references from originalPalette.
  palette: JSON.parse(JSON.stringify({
    id: palettesData[0].id,
    colors: palettesData[0].colors.map((color, index) => ({
      ...color,
      id: index,
    })),
  })),
  originalPalette: JSON.parse(JSON.stringify({
    id: palettesData[0].id,
    colors: palettesData[0].colors.map((color, index) => ({
      ...color,
      id: index,
    })),
  })),
  locked: [null, null, null, null, null],
  shadesNumber: 2,
  shades: {
    light: [],
    dark: [],
  },
  loading: 'fulfilled', // 'idle' | 'pending' | 'rejected' | 'fulfilled'
};

const palette = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PALETTE: {
      return {
        ...state,
        palette: {
          id: null,
          colors: JSON.parse(JSON.stringify(action.palette.map((color, index) => ({
            ...color,
            id: index,
          })))),
        },
        originalPalette: {
          id: null,
          colors: JSON.parse(JSON.stringify(action.palette.map((color, index) => ({
            ...color,
            id: index,
          })))),
        },
      };
    }

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

    case SET_SHADE: {
      const shades = getColorSteps(action.color, state.shadesNumber);
      const newShades = JSON.parse(JSON.stringify({ ...state.shades }));

      for (let step = 0; step < state.shadesNumber; step += 1) {
        if (newShades.light[step] && newShades.dark[step]) {
          newShades.light[step][action.index] = shades.light[step];
          newShades.dark[step][action.index] = shades.dark[step];
        }
      }

      return {
        ...state,
        shades: newShades,
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

    case RESET_PALETTE:
      return {
        ...state,
        palette: JSON.parse(JSON.stringify({ ...state.originalPalette })),
      };

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

export default palette;
