export const getMainPalette = (state) => state.palette.palette;

export const getOriginalPalette = (state) => state.palette.originalPalette;

export const getDidPaletteChange = (state) => JSON.stringify(state.palette.palette)
  === JSON.stringify(state.palette.originalPalette);

export const getPaletteLoading = (state) => state.palette.loading;

export const getShades = (state) => state.palette.shades;

export const getShadesNumber = (state) => state.palette.shadesNumber;

export const getLocked = (state) => state.palette.locked;
