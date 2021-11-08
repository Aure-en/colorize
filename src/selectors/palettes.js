export const getAllPalettes = (state) => state.palettes.palettes;

export const getPalettesPage = (state, key) =>
  state.palettes.palettes.find((page) => page.key === key);

export const getPalettePage = (state, key) =>
  state.palettes.palette.find((page) => page.key === key);
