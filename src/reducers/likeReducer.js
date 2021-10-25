import { LIKE_PALETTE, UNLIKE_PALETTE } from '../actions/like';

export const initialState = [];

const likeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIKE_PALETTE:
      return [...state, action.palette];

    case UNLIKE_PALETTE:
      return [...state].filter((palette) => palette.id !== action.palette.id);

    default:
      return state;
  }
};

export const getLikes = (state) => state.like;

export default likeReducer;
