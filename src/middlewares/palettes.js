import {
  FETCH_PALETTE,
  FETCH_PALETTES,
  savePalette,
  savePalettes,
  updateLoading,
} from '../actions/palettes';

const palettesMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PALETTE: {
      const { dispatch } = store;

      const paletteResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${action.paletteId}/colors`,
      );
      const palette = await paletteResponse.json();

      const ownerResponse = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/${action.paletteId}/user`,
      );
      const owner = await ownerResponse.json();

      dispatch(
        savePalette(action.key, {
          ...palette,
          owner: { username: owner.owner.username, id: owner.owner.id },
        }),
      );
      dispatch(updateLoading('fulfilled'));

      break;
    }

    case FETCH_PALETTES: {
      const { dispatch } = store;
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/colors?page=${action.page}&sort=${action.sort}&filter=${action.filter}`,
      );

      const json = await response.json();
      dispatch(savePalettes(action.key, json));
      dispatch(updateLoading('fulfilled'));
      break;
    }

    default:
  }
  next(action);
};

export default palettesMiddleware;
