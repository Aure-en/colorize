import {
  REQUEST_LIKE_PALETTE,
  REQUEST_UNLIKE_PALETTE,
  likePalette,
  unlikePalette,
} from '../actions/like';

const likeMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_LIKE_PALETTE: {
      const { user } = store.getState();
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${action.paletteId}/like`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      store.dispatch(likePalette(action.paletteId));
      break;
    }

    case REQUEST_UNLIKE_PALETTE: {
      // API request
      store.dispatch(unlikePalette(action.paletteId));
      break;
    }

    default:
  }
  next(action);
};

export default likeMiddleware;
