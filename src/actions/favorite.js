export const SAVE_PALETTE = 'SAVE_PALETTE';
export const UNSAVE_PALETTE = 'UNSAVE_PALETTE';
export const REQUEST_SAVE_PALETTE = 'REQUEST_SAVE_PALETTE';
export const REQUEST_UNSAVE_PALETTE = 'REQUEST_UNSAVE_PALETTE';

export const REQUEST_CREATE_COLLECTION = 'REQUEST_CREATE_COLLECTION';
export const REQUEST_UPDATE_COLLECTION = 'REQUEST_UPDATE_COLLECTION';
export const REQUEST_DELETE_COLLECTION = 'REQUEST_DELETE_COLLECTION';
export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';

export const UPDATE_CURRENT_COLLECTION = 'UPDATE_CURRENT_COLLECTION';

export const savePalette = (palette, collectionId) => ({
  type: SAVE_PALETTE,
  palette,
  collectionId,
});

export const unsavePalette = (paletteId) => ({
  type: UNSAVE_PALETTE,
  paletteId,
});

export const requestSavePalette = (paletteId, collectionId) => ({
  type: REQUEST_SAVE_PALETTE,
  paletteId,
  collectionId,
});

export const requestUnsavePalette = (paletteId) => ({
  type: REQUEST_UNSAVE_PALETTE,
  paletteId,
});

export const createCollection = ({ name, collectionId }) => ({
  type: CREATE_COLLECTION,
  name,
  collectionId,
});

export const updateCollection = ({ name, collectionId }) => ({
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
  type: UPDATE_COLLECTION,
  name,
  collectionId,
});

export const requestDeleteCollection = (collectionId) => ({
  type: DELETE_COLLECTION,
  collectionId,
});

export const updateCurrentCollection = (collectionId) => ({
  type: UPDATE_CURRENT_COLLECTION,
  collectionId,
});
