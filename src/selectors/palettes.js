export const getSortBy = (state) => state.palettes.sortBy;

export const getFilterBy = (state) => state.palettes.filterBy;

export const getAllPalettes = (state) => state.palettes.palettes;

export const getPage = (state, key) =>
  state.palettes.palettes.find((group) => group.key === key);

export const getPalette = (state, paletteId) =>
  state.palettes.palettes.find((palette) => palette.id === +paletteId);

export const getLoading = (state) => state.loading;
