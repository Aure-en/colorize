import { SAVE_PALETTE, UNSAVE_PALETTE } from '../actions/favorite';
import palettes from '../data/palettes';

export const initialState = [
  {
    name: 'Default',
    palettes: [palettes[0], palettes[1], palettes[2], palettes[3]],
    id: 0,
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
    case SAVE_PALETTE: {
      return [...state].map((collection) =>
        collection.id === action.collectionId
          ? {
              ...collection,
              palettes: [...collection.palettes, action.palette],
            }
          : collection
      );
    }

    case UNSAVE_PALETTE: {
      const collections = [...state];
      const collectionWithPalette = collections.find((collection) => 
        collection.palettes.find((palette) => palette.id === action.paletteId));
      const collectionWithoutPalette = {
        ...collectionWithPalette,
        palettes: collectionWithPalette.palettes.filter(
          (palette) => palette.id !== action.paletteId,
        ) };
      const stateWithoutPalette = collections.map((collection) =>
        collection.id === collectionWithoutPalette.id
          ? collectionWithoutPalette
          : collection
      );
      return stateWithoutPalette;
    }

    default:
      return state;
  }
};

export default favorite;
