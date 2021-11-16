import {
  LIKE_PALETTE, UNLIKE_PALETTE, SAVE_LIKES, RESET_LIKES,
} from '../actions/like';

export const initialState = [];

const like = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIKE_PALETTE:
      return [...state, action.paletteId];

    case UNLIKE_PALETTE:
      return [...state].filter((paletteId) => paletteId !== action.paletteId);

    case SAVE_LIKES:
      return action.likes;

    case RESET_LIKES:
      return [];

    default:
      return state;
  }
};

export default like;
