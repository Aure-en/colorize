import { SAVE_THEMES } from '../actions/themes';

export const initialState = [];

const themes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_THEMES:
      return action.themes;

    default:
      return state;
  }
};

export default themes;
