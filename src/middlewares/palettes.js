import {
  FETCH_PALETTES,
  savePalettes,
  updateLoading,
} from '../actions/palettes';

const palettesMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PALETTES: {
      const { dispatch } = store;
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/palettes/colors?page=${action.page}&sort=${action.sort}&filter=${action.filter}`,
      );

      const json = await response.json();
      dispatch(savePalettes(action.key, json));
      dispatch(updateLoading('idle'));
    }

    default:
  }
  next(action);
};

export default palettesMiddleware;
