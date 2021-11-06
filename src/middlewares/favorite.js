import {
  REQUEST_SAVE_PALETTE,
  REQUEST_UNSAVE_PALETTE,
  savePalette,
  unsavePalette,
} from '../actions/favorite';
import palettes from '../data/palettes';

const favoriteMiddleware = (store) => (next) => (action) => {
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

    default:
  }
  next(action);
};

export default favoriteMiddleware;
