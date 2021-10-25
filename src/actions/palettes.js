export const FETCH_PALETTES = 'FETCH_PALETTES';
export const SAVE_PALETTES = 'SAVE_PALETTES';

export const fetchPalettes = () => ({
  type: FETCH_PALETTES,
});

export const savePalettes = (palettes) => ({
  type: SAVE_PALETTES,
  palettes,
});
