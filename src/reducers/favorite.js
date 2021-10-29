import { SAVE_PALETTE, UNSAVE_PALETTE } from '../actions/favorite';
import palettes from '../data/palettes';

export const initialState = [
  {
    name: 'default',
    palettes: [palettes[0], palettes[1], palettes[2], palettes[3]],
    id: 1,
  },
  {
    name: 'pastel',
    palettes: [palettes[4], palettes[5]],
    id: 12,
  },
  {
    name: 'renovation',
    palettes: [palettes[6]],
    id: 45,
  },
];

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
