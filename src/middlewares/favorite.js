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
  setModalCollection,
} from '../actions/favorite';

import { closeModal } from '../actions/modals';

import { getColorFromHex } from '../utils/colors';

const favoriteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_SAVE_PALETTE: {
      const { user } = store.getState();
      const { collections } = store.getState().favorite;
      const { dispatch } = store;

      // Get collection name for the API request
      const collectionName = collections.find(
        (collection) => collection.id === action.collectionId,
      ).name;

      const favoriteRes = await fetch(
        `${process.env.REACT_APP_SERVER}/files/${action.collectionId}/${action.paletteId}`,
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

      const favorite = await favoriteRes.json();

      if (favorite.id) {
        // Get the palette data to save it in the selected collection.
        const paletteRes = await fetch(
          `${process.env.REACT_APP_SERVER}/palettes/${favorite.id}/colors`,
        );

        const palette = await paletteRes.json();

        if (palette.id) {
          dispatch(savePalette(palette));
        }
      }
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

      const collection = await response.json();

      if (collection.id) {
        dispatch(createCollection(action.name, collection.id));
        dispatch(closeModal('createCollection'));
      }

      break;
    }

    case REQUEST_UPDATE_COLLECTION: {
      const { user } = store.getState();
      const { dispatch } = store;

      // TO-DO: Request to API to update the collection.
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/files/${action.collectionId}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ name: action.name }),
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const json = await response.json();

      if (json.id) {
        dispatch(updateCollection(action.name, action.collectionId));
        dispatch(closeModal('updateCollection'));
      }

      dispatch(updateCollection(action.name, action.collectionId));
      dispatch(closeModal('updateCollection'));
      break;
    }

    case REQUEST_DELETE_COLLECTION: {
      const { user } = store.getState();
      const { dispatch } = store;

      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/files/${action.collectionId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );

      const collection = await response.json();

      if (collection.id) {
        dispatch(deleteCollection(action.collectionId));
        dispatch(closeModal('deleteCollection'));
        dispatch(setModalCollection(null));
      }
      break;
    }

    case FETCH_COLLECTIONS: {
      const { user } = store.getState();

      // List all of the users collections
      const response = await fetch(`${process.env.REACT_APP_SERVER}/files/`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      const collections = await response.json();

      if (Array.isArray(collections)) {
        // For each collection, fetch its palettes.
        // TO-DO: Fetch palettes of collections and add them when they contain associated colors.
        const collectionsWithPalettes = await Promise.all(
          collections.map(async (collection) => {
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
          }),
        );

        // Format to get all color formats per palette
        const collectionsWithAllColorFormats = collectionsWithPalettes.map((collection) => ({
          ...collection,
          palettes: collection.palettes.map((palette) => ({
            ...palette,
            colors: palette.colors.map((color) => getColorFromHex(color.hex)),
          })),
        }));

        store.dispatch(
          saveCollections(collectionsWithAllColorFormats),
        );
      }

      break;
    }

    default:
  }
  next(action);
};

export default favoriteMiddleware;
