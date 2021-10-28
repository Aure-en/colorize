import { UPDATE_CREATION_PAGE } from '../actions/settings';

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

    default:
      return state;
  }
};

export default settings;
