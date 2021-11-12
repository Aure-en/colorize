import {
  FETCH_FIRST_PALETTE,
  setPaletteLoading,
  setMainPalette,
  setOriginalPalette,
} from '../actions/palette';
import palettes from '../data/palettes';

const paletteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_FIRST_PALETTE: {
      const { dispatch } = store;
      // API request to fetch the featured palette

      // Choose a random palette from the featured ones.
      const paletteIndex = Math.floor(Math.random() * palettes.length);
      const palette = palettes[paletteIndex];

      dispatch(setMainPalette(palette));
      dispatch(setOriginalPalette(palette));
      dispatch(setPaletteLoading('fulfilled'));
    }

    default:
  }
  next(action);
};

export default paletteMiddleware;
