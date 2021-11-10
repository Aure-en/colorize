import {
  UPDATE_EXPORT_PALETTE, UPDATE_CODE_FORMAT, UPDATE_COLOR_FORMAT,
} from '../actions/export';

export const initialState = {
  palette: {},
  codeFormat: 'css',
  colorFormat: 'hex',
};

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_EXPORT_PALETTE:
      return {
        ...state,
        palette: action.palette,
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
