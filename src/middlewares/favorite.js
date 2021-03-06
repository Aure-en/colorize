import {
  REQUEST_ADD_PALETTE_TO_COLLECTION,
  REQUEST_DELETE_PALETTE_FROM_COLLECTION,
  REQUEST_CREATE_COLLECTION,
  REQUEST_UPDATE_COLLECTION,
  REQUEST_DELETE_COLLECTION,
  addPaletteToCollection,
  deletePaletteFromCollection,
  createCollection,
  updateCollection,
  deleteCollection,
  FETCH_COLLECTIONS,
  saveCollections,
  setModalCollection,
  setDefaultCollection,
  setCurrentCollection,
  REQUEST_DELETE_PALETTE_FROM_COLLECTIONS,
  requestDeletePaletteFromCollection,
} from '../actions/favorite';

import { openModal, closeModal } from '../actions/modals';
import { logout } from '../actions/user';

import { getColorFromHex } from '../utils/colors';

const favoriteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_ADD_PALETTE_TO_COLLECTION: {
      const { user } = store.getState();
      const { collections } = store.getState().favorite;
      const { dispatch } = store;

      // Get collection name for the API request
      const collectionName = collections.find(
        (collection) => collection.id === action.collectionId,
      ).name;

      const favoriteRes = await fetch(
        `${process.env.REACT_APP_SERVER}/files/${action.collectionId}/${action.paletteId}/${user.id}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
          body: JSON.stringify({
            name: collectionName,
          }),
        },
      );

      const json = await favoriteRes.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(openModal('expiredToken'));
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well.
      if (json.id) {
        // Get the palette data to save it in the selected collection.
        const paletteRes = await fetch(
          `${process.env.REACT_APP_SERVER}/palettes/${action.paletteId}/colors`,
        );

        const palette = await paletteRes.json();

        if (palette.id) {
          dispatch(addPaletteToCollection(palette, action.collectionId));
        }
      }
      break;
    }

    case REQUEST_DELETE_PALETTE_FROM_COLLECTION: {
      const { user } = store.getState();
      const { dispatch } = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/files/${action.collectionId}/palettes/${action.paletteId}/${user.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(openModal('expiredToken'));
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well.
      if (json.id) {
        dispatch(
          deletePaletteFromCollection(action.paletteId, action.collectionId),
        );
      }
      break;
    }

    case REQUEST_DELETE_PALETTE_FROM_COLLECTIONS: {
      const { dispatch } = store;
      const { favorite } = store.getState();
      const { collections } = favorite;

      // Find all collections containing the specific palette
      const collectionsWithPalette = collections.filter(
        (collection) => collection.palettes.find(
          (palette) => palette.id === action.paletteId,
        ) !== undefined,
      );

      // For each collection, make a request to delete the palette from the collection.
      collectionsWithPalette.forEach((collection) => dispatch(
        requestDeletePaletteFromCollection(action.paletteId, collection.id),
      ));
      break;
    }

    case REQUEST_CREATE_COLLECTION: {
      const { user } = store.getState();
      const { dispatch } = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/files/user/${user.id}`,
        {
          method: 'POST',
          body: JSON.stringify({ name: action.name }),
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(closeModal('createCollection'));
        dispatch(openModal('expiredToken'));
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well.
      if (json.id) {
        dispatch(createCollection(action.name, json.id));
        dispatch(closeModal('createCollection'));
      }

      break;
    }

    case REQUEST_UPDATE_COLLECTION: {
      const { user } = store.getState();
      const { dispatch } = store;

      // TO-DO: Request to API to update the collection.
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/files/${action.collectionId}/${user.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ name: action.name }),
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(closeModal('updateCollection'));
        dispatch(openModal('expiredToken'));
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well.
      if (json.id) {
        dispatch(updateCollection(action.name, action.collectionId));
        dispatch(closeModal('updateCollection'));
      }
      break;
    }

    case REQUEST_DELETE_COLLECTION: {
      const { user } = store.getState();
      const { dispatch } = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/files/${action.collectionId}/${user.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(closeModal('deleteCollection'));
        dispatch(openModal('expiredToken'));
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well.
      if (json.id) {
        dispatch(deleteCollection(action.collectionId));
        dispatch(closeModal('deleteCollection'));
        dispatch(setModalCollection(null));
      }
      break;
    }

    case FETCH_COLLECTIONS: {
      const { user } = store.getState();
      const { dispatch } = store;

      // List all of the users collections
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/${user.id}/files`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      // Expired JWT.
      if (json.code === 401 && /expired jwt token/i.test(json.message)) {
        dispatch(logout());
        localStorage.removeItem('user');
      }

      // Everything went well
      const collections = json.filesPersonnel;

      if (Array.isArray(collections)) {
        // Format to get all color formats per palette
        const collectionsWithAllColorFormats = collections.map(
          (collection) => ({
            ...collection,
            palettes: collection.palettes.map((palette) => ({
              ...palette,
              colors: palette.colors.map((color) => getColorFromHex(color.hex)),
            })),
          }),
        );

        dispatch(saveCollections(collectionsWithAllColorFormats));

        // Collection with the lowest id is the default one.
        const defaultCollection = collectionsWithAllColorFormats.sort(
          (a, b) => a.id - b.id,
        )[0].id;

        dispatch(setDefaultCollection(defaultCollection));
        dispatch(setCurrentCollection(defaultCollection));
      }

      break;
    }

    default:
  }
  next(action);
};

export default favoriteMiddleware;
