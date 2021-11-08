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

      if (palette.id) {
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
      } else {
        dispatch(updateLoading('rejected'));
      }

      break;
    }

    case FETCH_PALETTES: {
      const { user } = store.getState();
      const { dispatch } = store;

      // Determine API Endpoint depending on the palettes we want to fetch.
      const PALETTES_REGEXP = /^palettes$/i;
      const THEMES_REGEXP = /^themes/i;
      const USERS_REGEXP = /^users/i;

      const PALETTES_ENDPOINT = `${process.env.REACT_APP_SERVER}/${action.category}/colors?page=${action.page}&sort=${action.sort}&filter=${action.filter}`;
      const THEMES_ENDPOINT = `${process.env.REACT_APP_SERVER}/${action.category}/palettes?page=${action.page}&sort=${action.sort}&filter=${action.filter}`;
      const USERS_ENDPOINT = `${process.env.REACT_APP_SERVER}/${action.category.replace('users', 'user')}/palettes/created?page=${action.page}`;

      let endpoint;
      if (PALETTES_REGEXP.test(action.category)) {
        endpoint = PALETTES_ENDPOINT;
      } else if (THEMES_REGEXP.test(action.category)) {
        endpoint = THEMES_ENDPOINT;
      } else if (USERS_REGEXP.test(action.category)) {
        endpoint = USERS_ENDPOINT;
      }

      const response = await fetch(endpoint,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        });

      const json = await response.json();

      let palettes;
      if (PALETTES_REGEXP.test(action.category)) {
        palettes = json;
      } else if (THEMES_REGEXP.test(action.category)) {
        palettes = json.palettes;
      } else if (USERS_REGEXP.test(action.category)) {
        palettes = json.palettesCreated;
      }

      dispatch(savePalettes(action.key, palettes));
      dispatch(updateLoading('fulfilled'));
      break;
    }

    default:
  }
  next(action);
};

export default palettesMiddleware;
