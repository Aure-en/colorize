export const getAllFavorites = (state) =>
  Object.values(state.favorite).reduce(
    (concat, current) => concat.concat(current.palettes),
    []
  );

export const getCollections = (state) => state.favorite;

export const getCollection = (state, id) =>
  state.favorite.find((collection) => collection.id === +id);
