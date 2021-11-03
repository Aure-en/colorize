import { LIKE_PALETTE, UNLIKE_PALETTE } from '../actions/like';
import palettes from '../data/palettes';

export const initialState = [palettes[3], palettes[4]];

const like = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIKE_PALETTE:
      return [...state, action.palette];

    case UNLIKE_PALETTE:
      return [...state].filter((palette) => palette.id !== action.paletteId);

    default:
      return state;
  }
};

export default like;
