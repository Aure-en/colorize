import { SAVE_PALETTE, UNSAVE_PALETTE } from '../actions/favorite';
import palettes from '../data/palettes';

export const initialState = [
  {
    name: 'Default',
    palettes: [palettes[0], palettes[1], palettes[2], palettes[3]],
    id: 1,
  },
  {
    name: 'Pastel',
    palettes: [palettes[4], palettes[5]],
    id: 12,
  },
  {
    name: 'Renovation',
    palettes: [palettes[6]],
    id: 45,
  },
  {
    name: 'Modern',
    palettes: [],
    id: 52,
  },
];

const favorite = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PALETTE:
      return state;

    case UNSAVE_PALETTE:
      return state;

    default:
      return state;
  }
};

export default favorite;
