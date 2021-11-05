import { FETCH_THEMES, saveThemes } from '../actions/themes';

const themesMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES: {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/themes`,
      );
      const themes = await response.json();
      const sortedThemes = themes.sort((a, b) => a.name.localeCompare(b.name));
      store.dispatch(saveThemes(sortedThemes));
      break;
    }

    default:
  }
  next(action);
};

export default themesMiddleware;
