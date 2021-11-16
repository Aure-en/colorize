import { LIKE_PALETTE, UNLIKE_PALETTE } from '../actions/like';

export const initialState = [];

const like = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIKE_PALETTE:
      return [...state, action.paletteId];

    case UNLIKE_PALETTE:
      return [...state].filter((paletteId) => paletteId !== action.paletteId);

    default:
      return state;
  }
};

export default like;
