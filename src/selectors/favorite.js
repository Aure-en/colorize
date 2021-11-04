export const getAllFavorites = (state) =>
  Object.values(state.favorite.collections).reduce(
    (concat, current) => concat.concat(current.palettes),
    [],
  );

export const getCurrentCollection = (state) => state.favorite.currentCollection;

export const getCollections = (state) => state.favorite.collections;

export const getCollection = (state, id) =>
  state.favorite.find((collection) => collection.id === +id);
