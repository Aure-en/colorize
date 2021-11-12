import {
  SET_MODAL_PALETTE,
  SET_MAIN_PALETTE,
  SET_ORIGINAL_PALETTE,
  RESET_PALETTE,
  DECREMENT_SHADES,
  INCREMENT_SHADES,
  SET_SHADE,
  SET_SHADES,
  UPDATE_COLOR,
  LOCK_COLOR,
  UNLOCK_COLOR,
  SET_PALETTE_LOADING,
} from '../actions/palette';
import {
  getLighterShades,
  getDarkerShades,
  getColorFromHex,
  getColorSteps,
} from '../utils/colors';

export const initialState = {
  // JSON.parse + JSON.stringify to recreate a new object
  // with nested arrays and objects with different references from originalPalette.
  palette: {
    id: null,
    colors: [],
  },
  originalPalette: {
    id: null,
    colors: [],
  },
  locked: [null, null, null, null, null],
  shadesNumber: 2,
  shades: {
    light: [],
    dark: [],
  },
  modalPalette: null,
  loading: 'pending',
};

const palette = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MAIN_PALETTE: {
      return {
        ...state,
        palette: JSON.parse(JSON.stringify({
          ...state.palette,
          ...action.palette,
          colors: action.palette.colors.map((color, index) => ({
            ...color,
            id: index,
          })),
        })),

      };
    }

    case SET_ORIGINAL_PALETTE: {
      return {
        ...state,
        originalPalette: JSON.parse(JSON.stringify({
          ...state.palette,
          ...action.palette,
          colors: action.palette.colors.map((color, index) => ({
            ...color,
            id: index,
          })),
        })),
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

    case SET_MODAL_PALETTE:
      return {
        ...state,
        modalPalette: action.palette,
      };

    case SET_PALETTE_LOADING:
      return {
        ...state,
        loading: {
          action: action.action,
          status: action.status,
          id: action.paletteId,
        },
      };

    default:
      return state;
  }
};

export default palette;
