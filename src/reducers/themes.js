import { SAVE_THEMES, SAVE_THEME_PALETTES } from '../actions/themes';

export const initialState = {
  list: [],
  palettes: [],
};

const themes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_THEMES:
      return {
        ...state,
        list: action.themes,
      };

    case SAVE_THEME_PALETTES: {
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

    default:
      return state;
  }
};

export default themes;
