import {
  UPDATE_SORT_BY,
  UPDATE_FILTER_BY,
  SAVE_PALETTE,
  SAVE_PALETTES,
  UPDATE_LOADING,
} from '../actions/palettes';

import { getColorFromHex } from '../utils/colors';

export const initialState = {
  /*
   * Array of { key: '', palettes: [] }
   * Keys:
   * palettes | themeId / filter / sort / page
   * Ex: palettes/all/popular/1 gets the 20 most popular paletts.
   */
  palettes: [],
  loading: 'idle',
  sortBy: 'popular',
  filterBy: 'all',
};

const palettes = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_SORT_BY:
      return { ...state, sortBy: action.sortBy };

    case UPDATE_FILTER_BY:
      return { ...state, filterBy: action.filterBy };

    case SAVE_PALETTE: {
      // Add all format to the palette
      const paletteWithAllFormats = {
        ...action.palette,
        colors: action.palette.colors.map((color) => getColorFromHex(color.hex)),
      };

      // If the key is already present, replace the palettes.
      if (state.palettes.find((group) => group.key === action.key)) {
        return palettes.map((group) =>
          group.key === action.key
            ? { key: action.key, palette: paletteWithAllFormats }
            : group
        );
      }

      // If the key was not present, add the object key + palettes.
      return {
        ...state,
        palettes: [
          ...state.palettes,
          { key: action.key, palette: paletteWithAllFormats },
        ],
      };
    }

    case SAVE_PALETTES: {
      // Add all formats to palettes
      const paletteWithAllFormats = action.palettes.slice(1).map((palette) => ({
        ...palette,
        colors: palette.colors.map((color) => getColorFromHex(color.hex)),
      }));

      // If the key is already present, replace the palettes.
      if (state.palettes.find((group) => group.key === action.key)) {
        return palettes.map((group) =>
          group.key === action.key
            ? { key: action.key, palettes: paletteWithAllFormats }
            : group
        );
      }

      // If the key was not present, add the object key + palettes.
      return {
        ...state,
        palettes: [
          ...state.palettes,
          { key: action.key, palettes: paletteWithAllFormats },
        ],
      };
    }

    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export default palettes;
