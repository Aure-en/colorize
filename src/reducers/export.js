import { OPEN_MODAL, CLOSE_MODAL } from '../actions/export';

export const initialState = {
  isModalOpen: false,
  palette: {},
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

    default:
      return state;
  }
};

export default settings;
