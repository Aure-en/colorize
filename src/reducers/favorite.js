import { SAVE_PALETTE, UNSAVE_PALETTE } from '../actions/favorite';

export const initialState = {
  default: [],
};

const favorite = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PALETTE:
      return { ...state, default: [...state.default, action.paletteId] };

    case UNSAVE_PALETTE:
      return {
        ...state,
        default: [...state.default].filter(
          (favorite) => favorite !== action.paletteId,
        ),
      };

    default:
      return state;
  }
};

export default favorite;
