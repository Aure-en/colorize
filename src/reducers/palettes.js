import {
  SAVE_PALETTE,
  SAVE_PALETTES,
  DELETE_PALETTE_FROM_PALETTES,
} from '../actions/palettes';

export const initialState = {
  /*
   * Arrays of { key: '', palette: [] }
   * Keys:
   * palettes | themeId / filter / sort / page
   * Ex: palettes/all/popular/1 gets the 20 most popular paletts.
   */
  palette: [],
  // Array of { key: '', palettes: []}
  palettes: [],
  loading: 'idle',
};

const palettes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PALETTE: {
      // If the key is already present, replace the palettes.
      if (state.palettes.find((page) => page.key === action.key)) {
        return {
          ...state,
          palette: state.palette.map((page) => (page.key === action.key
            ? { key: action.key, palette: action.palette }
            : page)),
        };
      }

      // If the key was not present, add the object key + palettes.
      return {
        ...state,
        palette: [
          ...state.palette,
          { key: action.key, palette: action.palette },
        ],
      };
    }

    case SAVE_PALETTES: {
      // If the key is already present, replace the palettes.
      if (state.palettes.find((page) => page.key === action.key)) {
        return {
          ...state,
          palettes: state.palettes.map((page) => (page.key === action.key
            ? { key: action.key, palettes: action.palettes }
            : page)),
        };
      }

      // If the key was not present, add the object key + palettes.
      return {
        ...state,
        palettes: [
          ...state.palettes,
          { key: action.key, palettes: action.palettes },
        ],
      };
    }

    case DELETE_PALETTE_FROM_PALETTES: {
      return {
        ...state,

        // Delete the single page of this palette if it had been loaded.
        palette: [...state.palette].filter(
          (page) => page.key !== `/palettes/${action.paletteId}`,
        ),
        // Delete the palette from the palettes list
        palettes: [...state.palettes].map((page) => {
          if (page.palettes) {
            return {
              ...page,
              palettes: page.palettes.filter(
                (palette) => palette.id !== action.paletteId,
              ),
            };
          }
          return page;
        }),
      };
    }

    default:
      return state;
  }
};

export default palettes;
