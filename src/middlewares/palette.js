import {
  FETCH_FIRST_PALETTE,
  setPaletteLoading,
  setMainPalette,
  setOriginalPalette,
} from '../actions/palette';

const paletteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_FIRST_PALETTE: {
      const { dispatch } = store;
      // API request to fetch the featured palettes
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/features`,
      );

      const json = await response.json();
      const palettes = json.list;

      // Choose a random palette from the featured ones.
      const paletteIndex = Math.floor(Math.random() * palettes.length);
      const chosenPalette = palettes[paletteIndex];

      // Get its owner
      const paletteResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${chosenPalette.id}/user`,
      );

      const palette = await paletteResponse.json();

      dispatch(setMainPalette({ ...palette, ...chosenPalette }));
      dispatch(setOriginalPalette({ ...palette, ...chosenPalette }));
      dispatch(setPaletteLoading('fulfilled'));
    }

    default:
  }
  next(action);
};

export default paletteMiddleware;
