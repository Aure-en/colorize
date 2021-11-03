import {
  REQUEST_LIKE_PALETTE,
  REQUEST_UNLIKE_PALETTE,
  likePalette,
  unlikePalette,
} from '../actions/like';
import palettes from '../data/palettes';

const likeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_LIKE_PALETTE: {
      // API request
      store.dispatch(likePalette(palettes[0]));
      break;
    }

    case REQUEST_UNLIKE_PALETTE: {
      // API request
      store.dispatch(unlikePalette(palettes[0].id));
      break;
    }

    default:
  }
  next(action);
};

export default likeMiddleware;
