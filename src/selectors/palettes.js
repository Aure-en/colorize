export const getSortBy = (state) => state.palettes.sortBy;

export const getFilterBy = (state) => state.palettes.filterBy;

export const getPalettes = (state) => state.palettes.palettes;

export const getPalette = (state, paletteId) =>
  state.palettes.palettes.find((palette) => palette.id === +paletteId);
