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
} from '../actions/favorite';

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
        store.dispatch(createCollection({ name: action.name, collectionId: json.id }));
      }

      break;
    }

    default:
  }
  next(action);
};

export default favoriteMiddleware;
