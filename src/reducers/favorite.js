import {
  SAVE_PALETTE,
  UNSAVE_PALETTE,
  UPDATE_CURRENT_COLLECTION,
} from '../actions/favorite';

export const initialState = {
  collections: [
    {
      name: 'Default',
      palettes: [],
      id: 0,
    },
    {
      name: 'Pastel',
      palettes: [],
      id: 12,
    },
    {
      name: 'Renovation',
      palettes: [],
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
    case SAVE_PALETTE: {
      let collections = [...{ ...state }.collections];

      // Remove palette from collection if it is already saved.
      const collectionWithPaletteId = collections.findIndex(
        (collection) =>
          collection.palettes.find((palette) => palette.id === action.paletteId),
      );

      if (collectionWithPaletteId !== -1) {
        collections[collectionWithPaletteId] = collections[
          collectionWithPaletteId
        ].palettes.filter((palette) => palette.id !== action.palette.id);
      }

      // Add palette to the selected collection
      collections = collections.map((collection) =>
        collection.id === action.collectionId
          ? {
              ...collection,
              palettes: [...collection.palettes, action.palette],
            }
          : collection
      );

      return {
        ...state,
        collections,
      };
    }

    case UNSAVE_PALETTE: {
      const prevState = { ...state };
      const collectionWithPalette = prevState.collections.find((collection) =>
        collection.palettes.find((palette) => palette.id === action.paletteId)
      );
      const collectionWithoutPalette = {
        ...collectionWithPalette,
        palettes: collectionWithPalette.palettes.filter(
          (palette) => palette.id !== action.paletteId
        ),
      };
      const stateWithoutPalette = {
        ...state,
        collections: prevState.collections.map((collection) =>
          collection.id === collectionWithoutPalette.id
            ? collectionWithoutPalette
            : collection
        ),
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
