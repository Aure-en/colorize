import { SAVE_PALETTE, UNSAVE_PALETTE, UPDATE_CURRENT_COLLECTION } from '../actions/favorite';
import palettes from '../data/palettes';

export const initialState = {
  collections: [
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
  ],
  currentCollection: 0,
};

const favorite = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PALETTE:
      return {
        ...state,
        collections: { ...state }.collections.map((collection) => (collection.id === action.collectionId
          ? {
            ...collection,
            palettes: [...collection.palettes, action.palette],
          }
          : collection)),
      };

    case UNSAVE_PALETTE: {
      const prevState = { ...state };
      const collectionWithPalette = prevState.collections.find((collection) => collection.palettes.find((palette) => palette.id === action.paletteId));
      const collectionWithoutPalette = {
        ...collectionWithPalette,
        palettes: collectionWithPalette.palettes.filter(
          (palette) => palette.id !== action.paletteId,
        ),
      };
      const stateWithoutPalette = {
        ...state,
        collections: prevState.collections.map((collection) => (collection.id === collectionWithoutPalette.id
          ? collectionWithoutPalette
          : collection)),
      };
      return stateWithoutPalette;
    }

    case UPDATE_CURRENT_COLLECTION:
      return {
        ...state,
        currentCollection: action.collectionId,
      };

    default:
      return state;
  }
};

export default favorite;
