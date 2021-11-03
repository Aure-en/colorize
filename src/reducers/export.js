import {
  OPEN_MODAL, CLOSE_MODAL, UPDATE_CODE_FORMAT, UPDATE_COLOR_FORMAT,
} from '../actions/export';

export const initialState = {
  isModalOpen: false,
  palette: {},
  codeFormat: 'css',
  colorFormat: 'hex',
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        palette: action.palette,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        palette: {},
      };

    case UPDATE_CODE_FORMAT:
      return {
        ...state,
        codeFormat: action.codeFormat,
      };

    case UPDATE_COLOR_FORMAT:
      return {
        ...state,
        colorFormat: action.colorFormat,
      };

    default:
      return state;
  }
};

export default settings;
