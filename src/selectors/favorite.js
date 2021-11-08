export const getAllFavorites = (state) => Object.values(state.favorite.collections).reduce(
  (concat, current) => concat.concat(current.palettes),
  [],
);

export const getCurrentCollection = (state) => state.favorite.currentCollection;

export const getCollections = (state) => state.favorite.collections;

export const getCollection = (state, id) => state.favorite.collections.find((collection) => collection.id === +id);

export const getFavoriteCollection = (state, paletteId) => {
  const collectionWithPalette = state.favorite.collections.find(
    (collection) => collection.palettes.find((palette) => palette.id === paletteId),
  );

  if (collectionWithPalette) {
    return collectionWithPalette.id;
  }
  return undefined;
};

export const getModalCollection = (state) => state.favorite.modalCollection;
