import { UPDATE_CREATION_PAGE, UPDATE_FORMAT } from '../actions/settings';

export const initialState = {
  creationPage: 'preview', // 'preview', 'shades'
  format: 'hex',
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
    default:
      return state;
  }
};

export const getFormat = (state) => state.settings.format;

export const getCreationPage = (state) => state.settings.creationPage;

export default settings;
