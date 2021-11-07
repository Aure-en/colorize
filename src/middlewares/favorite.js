import {
  REQUEST_SAVE_PALETTE,
  REQUEST_UNSAVE_PALETTE,
  REQUEST_CREATE_COLLECTION,
  REQUEST_UPDATE_COLLECTION,
  REQUEST_DELETE_COLLECTION,
  savePalette,
  unsavePalette,
  createCollection,
  updateCollection,
  deleteCollection,
  FETCH_COLLECTIONS,
  saveCollections,
} from '../actions/favorite';

import { closeModal } from '../actions/modals';

const favoriteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_SAVE_PALETTE: {
      // API request
      // Dispatch savePalette action.
      break;
    }

    case REQUEST_UNSAVE_PALETTE: {
      // API request
      // Dispatch unsavePalette action.
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

      if (json.id) {
        dispatch(createCollection({ name: action.name, collectionId: json.id }));
        dispatch(closeModal('createCollection'));
      }

      break;
    }

    case FETCH_COLLECTIONS: {
      const { user } = store.getState();

      // List all of the users collections
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/files/`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const collections = await response.json();

      if (Array.isArray(collections)) {
      // For each collection, fetch its palettes.
        const collectionsWithPalettes = await Promise.all(collections.map(async (collection) => {
          const res = await fetch(
            `${process.env.REACT_APP_SERVER}/files/${collection.id}/palettes`,
            {
              headers: {
                Authorization: `Bearer ${user.jwt}`,
              },
            },
          );
          const palette = await res.json();
          return palette;
        }));

        store.dispatch(saveCollections(collectionsWithPalettes));
      }

      break;
    }

    default:
  }
  next(action);
};

export default favoriteMiddleware;
