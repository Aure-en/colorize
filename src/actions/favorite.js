export const ADD_PALETTE_TO_COLLECTION = 'ADD_PALETTE_TO_COLLECTION';
export const DELETE_PALETTE_FROM_COLLECTION = 'DELETE_PALETTE_FROM_COLLECTION';
export const DELETE_PALETTE_FROM_COLLECTIONS = 'DELETE_PALETTE_FROM_COLLECTIONS';
export const UPDATE_PALETTE_IN_COLLECTION = 'UPDATE_PALETTE_IN_COLLECTION';

export const REQUEST_ADD_PALETTE_TO_COLLECTION = 'REQUEST_ADD_PALETTE_TO_COLLECTION';
export const REQUEST_DELETE_PALETTE_FROM_COLLECTION = 'REQUEST_DELETE_PALETTE_FROM_COLLECTION';
export const REQUEST_DELETE_PALETTE_FROM_COLLECTIONS = 'REQUEST_DELETE_PALETTE_FROM_COLLECTIONS';

export const REQUEST_CREATE_COLLECTION = 'REQUEST_CREATE_COLLECTION';
export const REQUEST_UPDATE_COLLECTION = 'REQUEST_UPDATE_COLLECTION';
export const REQUEST_DELETE_COLLECTION = 'REQUEST_DELETE_COLLECTION';

export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const SAVE_COLLECTIONS = 'SAVE_COLLECTIONS';
export const CLEAR_COLLECTIONS = 'CLEAR_COLLECTIONS';

export const SET_MODAL_COLLECTION = 'SET_MODAL_COLLECTION';
export const SET_CURRENT_COLLECTION = 'SET_CURRENT_COLLECTION';
export const SET_DEFAULT_COLLECTION = 'SET_DEFAULT_COLLECTION';

export const addPaletteToCollection = (palette, collectionId) => ({
  type: ADD_PALETTE_TO_COLLECTION,
  palette,
  collectionId,
});

export const deletePaletteFromCollection = (paletteId, collectionId) => ({
  type: DELETE_PALETTE_FROM_COLLECTION,
  paletteId,
  collectionId,
});

export const deletePaletteFromCollections = (paletteId) => ({
  type: DELETE_PALETTE_FROM_COLLECTIONS,
  paletteId,
});

export const updatePaletteInCollection = (palette) => ({
  type: UPDATE_PALETTE_IN_COLLECTION,
  palette,
});

export const requestAddPaletteToCollection = (paletteId, collectionId) => ({
  type: REQUEST_ADD_PALETTE_TO_COLLECTION,
  paletteId,
  collectionId,
});

export const requestDeletePaletteFromCollection = (paletteId, collectionId) => ({
  type: REQUEST_DELETE_PALETTE_FROM_COLLECTION,
  paletteId,
  collectionId,
});

export const requestDeletePaletteFromCollections = (paletteId) => ({
  type: REQUEST_DELETE_PALETTE_FROM_COLLECTIONS,
  paletteId,
});

export const createCollection = (name, collectionId) => ({
  type: CREATE_COLLECTION,
  name,
  collectionId,
});

export const updateCollection = (name, collectionId) => ({
  type: UPDATE_COLLECTION,
  name,
  collectionId,
});

export const deleteCollection = (collectionId) => ({
  type: DELETE_COLLECTION,
  collectionId,
});

export const requestCreateCollection = (name) => ({
  type: REQUEST_CREATE_COLLECTION,
  name,
});

export const requestUpdateCollection = (name, collectionId) => ({
  type: REQUEST_UPDATE_COLLECTION,
  name,
  collectionId,
});

export const requestDeleteCollection = (collectionId) => ({
  type: REQUEST_DELETE_COLLECTION,
  collectionId,
});

export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS,
});

export const saveCollections = (collections) => ({
  type: SAVE_COLLECTIONS,
  collections,
});

export const clearCollections = () => ({
  type: CLEAR_COLLECTIONS,
});

export const setModalCollection = (collection) => ({
  type: SET_MODAL_COLLECTION,
  collection,
});

export const setDefaultCollection = (collectionId) => ({
  type: SET_DEFAULT_COLLECTION,
  collectionId,
});

export const setCurrentCollection = (collectionId) => ({
  type: SET_CURRENT_COLLECTION,
  collectionId,
});
