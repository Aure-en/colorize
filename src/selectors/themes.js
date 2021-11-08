export const getThemes = (state) => state.themes.list;

export const getThemePage = (state, key) =>
  state.themes.palettes.find((group) => group.key === key);
