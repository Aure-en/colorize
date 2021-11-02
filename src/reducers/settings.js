import { UPDATE_CREATION_PAGE, UPDATE_FORMAT, TOGGLE_SWITCHER } from '../actions/settings';

export const initialState = {
  creationPage: 'preview', // 'preview', 'shades'
  format: 'hex',
  isDarkMode: true,
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CREATION_PAGE:
      return {
        ...state,
        creationPage: state.creationPage === 'preview' ? 'shades' : 'preview',
      };

    case UPDATE_FORMAT:
      return {
        ...state,
        format: action.format,
      };

    case TOGGLE_SWITCHER:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default settings;
