export const getAllPalettes = (state) => state.palettes.palettes;

export const getPage = (state, key) =>
  state.palettes.palettes.find((group) => group.key === key);

export const getPalette = (state, paletteId) =>
  state.palettes.palettes.find((group) => group.key === `/palettes/${paletteId}`);

export const getLoading = (state) => state.palettes.loading;
