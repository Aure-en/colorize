import {
  ADD_PALETTE_TO_COLLECTION,
  DELETE_PALETTE_FROM_COLLECTION,
  UPDATE_PALETTE_IN_COLLECTION,
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION,
  SAVE_COLLECTIONS,
  CLEAR_COLLECTIONS,
  SET_CURRENT_COLLECTION,
  SET_MODAL_COLLECTION,
  SET_DEFAULT_COLLECTION,
} from '../actions/favorite';

export const initialState = {
  collections: [], // Array of { name, palettes: [], id}
  currentCollection: null, // Selected collection
  defaultCollection: null, // Collection by default, user cannot remove it.
  modalCollection: null,
};

const favorite = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COLLECTIONS:
      return {
        ...state,
        collections: action.collections,
      };

    case ADD_PALETTE_TO_COLLECTION: {
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

    case UPDATE_PALETTE_IN_COLLECTION:
      return {
        ...state,
        collections: state.collections.map((collection) => ({
          ...collection,
          palettes: collection.palettes.map((palette) => (palette.id === action.palette.id ? action.palette : palette)),
        })),
      };

    case SET_CURRENT_COLLECTION:
      return {
        ...state,
        currentCollection: action.collectionId,
      };

    case DELETE_PALETTE_FROM_COLLECTION:
      return {
        ...state,
        collections: [...state.collections].map((collection) => (collection.id === action.collectionId
          ? {
            ...collection,
            palettes: collection.palettes.filter(
              (palette) => palette.id !== action.paletteId,
            ),
          }
          : collection)),
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
        collections: [...state.collections].map((collection) => (collection.id === action.collectionId
          ? { ...collection, name: action.name }
          : collection)),
      };

    case DELETE_COLLECTION:
      return {
        ...state,
        collections: [...state.collections].filter(
          (collection) => collection.id !== action.collectionId,
        ),
      };

    case CLEAR_COLLECTIONS:
      return initialState;

    case SET_MODAL_COLLECTION:
      return {
        ...state,
        modalCollection: action.collection,
      };

    case SET_DEFAULT_COLLECTION:
      return {
        ...state,
        defaultCollection: action.collectionId,
      };

    default:
      return state;
  }
};

export default favorite;
