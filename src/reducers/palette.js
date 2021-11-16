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
  REMOVE_COLOR,
  ADD_COLOR,
} from '../actions/palette';
import {
  getLighterShades,
  getDarkerShades,
  getLighterShade,
  getDarkerShade,
  isColorLight,
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
        palette: JSON.parse(
          JSON.stringify({
            ...state.palette,
            ...action.palette,
            colors: action.palette.colors.map((color, index) => ({
              ...color,
              position: index,
            })),
          }),
        ),
      };
    }

    case SET_ORIGINAL_PALETTE: {
      return {
        ...state,
        originalPalette: JSON.parse(
          JSON.stringify({
            ...state.palette,
            ...action.palette,
            colors: action.palette.colors.map((color, index) => ({
              ...color,
              position: index,
            })),
          }),
        ),
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

    case REMOVE_COLOR:
      return {
        ...state,
        palette: {
          ...state.palette,
          colors: state.palette.colors.filter(
            (color) => color.position !== action.position,
          ),
        },
      };

    case ADD_COLOR: {
      /* If original palette has more colors than the main palette,
       * adding a color restore one of the original palette's colors.
       */
      const mainPaletteIds = state.palette.colors.map((color) => color.id);
      const originalPaletteIds = state.originalPalette.colors.map(
        (color) => color.id,
      );

      // Colors ids that are in the original palette but not in the main palette anymore.
      const nextColorsIds = originalPaletteIds.filter(
        (id) => !mainPaletteIds.includes(id),
      );

      if (nextColorsIds.length > 0) {
        return {
          ...state,
          palette: {
            ...state.palette,
            colors: [
              ...state.palette.colors,
              {
                ...JSON.parse(
                  JSON.stringify(
                    state.originalPalette.colors.find(
                      (color) => color.id === nextColorsIds[0],
                    ),
                  ),
                ),
                position: state.palette.colors.length,
              },
            ],
          },
        };
      }

      // Otherwise, a shade of the first color is added.
      const firstColor = state.palette.colors[0];
      const firstColorShade = isColorLight(firstColor.hex)
        ? getDarkerShade(firstColor.hex, 5, state.palette.colors.length)
        : getLighterShade(firstColor.hex, 5, state.palette.colors.length);

      return {
        ...state,
        palette: {
          ...state.palette,
          colors: [
            ...state.palette.colors,
            {
              ...firstColorShade,
              position: state.palette.colors.length,
            },
          ],
        },
      };
    }

    default:
      return state;
  }
};

export default palette;
