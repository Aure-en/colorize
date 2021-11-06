import {
  SAVE_PALETTE,
  UNSAVE_PALETTE,
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION,
  SAVE_COLLECTIONS,
  UPDATE_CURRENT_COLLECTION,
} from '../actions/favorite';

export const initialState = {
  collections: [], // Array of { name, palettes: [], id}
  currentCollection: 0,
};

const favorite = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COLLECTIONS:
      return {
        ...state,
        collections: action.collections,
      };

    case SAVE_PALETTE: {
      let collections = [...{ ...state }.collections];

      // Remove palette from collection if it is already saved.
      const collectionWithPaletteId = collections.findIndex((collection) => collection.palettes.find((palette) => palette.id === action.paletteId));

      if (collectionWithPaletteId !== -1) {
        collections[collectionWithPaletteId] = collections[
          collectionWithPaletteId
        ].palettes.filter((palette) => palette.id !== action.palette.id);
      }

      // Add palette to the selected collection
      collections = collections.map((collection) => (collection.id === action.collectionId
        ? {
          ...collection,
          palettes: [...collection.palettes, action.palette],
        }
        : collection));

      return {
        ...state,
        collections,
      };
    }

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

    case CREATE_COLLECTION:
      return {
        ...state,
        collections: [
          ...state.collections,
          { name: action.name, id: action.collectionId, palettes: [] },
        ],
      };

    case UPDATE_COLLECTION:
      return {
        ...state,
        collections: [
          ...state.collections,
        ].map((collection) => (collection.id === action.collectionId
          ? { ...collection, name: action.name } : collection)),
      };

    case DELETE_COLLECTION:
      return {
        ...state,
        collections: [
          ...state.collections,
        ].filter((collection) => collection.id !== action.collectionId),
      };

    default:
      return state;
  }
};

export default favorite;
