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
      store.dispatch(savePalette(palettes[0], 0));
      break;
    }

    case REQUEST_UNSAVE_PALETTE: {
      // API request
      store.dispatch(unsavePalette(0));
      break;
    }

    default:
  }
  next(action);
};

export default favoriteMiddleware;
