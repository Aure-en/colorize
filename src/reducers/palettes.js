import {
  SAVE_PALETTE,
  SAVE_PALETTES,
  DELETE_PALETTE_FROM_PALETTES,
} from '../actions/palettes';

import { getColorFromHex } from '../utils/colors';

export const initialState = {
  /*
   * Array of { key: '', palettes: [] } or { key: '', palette: {}}
   * Keys:
   * palettes | themeId / filter / sort / page
   * Ex: palettes/all/popular/1 gets the 20 most popular paletts.
   */
  palettes: [],
  loading: 'idle',
};

const palettes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PALETTE: {
      // Add all format to the palette
      const paletteWithAllFormats = {
        ...action.palette,
        colors: action.palette.colors.map((color) => getColorFromHex(color.hex)),
      };

      // If the key is already present, replace the palettes.
      if (state.palettes.find((group) => group.key === action.key)) {
        return palettes.map((group) => (group.key === action.key
          ? { key: action.key, palette: paletteWithAllFormats }
          : group));
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
      const paletteWithAllFormats = action.palettes.map((palette) => ({
        ...palette,
        colors: palette.colors.map((color) => getColorFromHex(color.hex)),
      }));

      // If the key is already present, replace the palettes.
      if (state.palettes.find((group) => group.key === action.key)) {
        return palettes.map((group) => (group.key === action.key
          ? { key: action.key, palettes: paletteWithAllFormats }
          : group));
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

    case DELETE_PALETTE_FROM_PALETTES: {
      return {
        ...state,
        palettes: [...state.palettes]
          // Delete the single page of this palette if it had been loaded.
          .filter((group) => group.key !== `/palettes/${action.paletteId}`)

          // Delete the palette from the palettes list
          .map((group) => {
            if (group.palettes) {
              return {
                ...group,
                palettes: group.palettes.filter((palette) => palette.id !== action.paletteId),
              };
            }
            return group;
          }),
      };
    }

    default:
      return state;
  }
};

export default palettes;
