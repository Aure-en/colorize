import {
  UPDATE_SORT_BY,
  UPDATE_FILTER_BY,
  UPDATE_CREATION_PAGE,
  UPDATE_FORMAT,
  TOGGLE_SWITCHER,
} from '../actions/settings';

export const initialState = {
  creationPage: 'preview', // 'preview', 'shades'
  format: 'hex',
  sortBy: 'popular',
  filterBy: 'all',
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,
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

    case UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy,
      };

    case UPDATE_FILTER_BY:
      return {
        ...state,
        filterBy: action.filterBy,
      };
    default:
      return state;
  }
};

export default settings;
