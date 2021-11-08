export const FETCH_PALETTES = 'FETCH_PALETTES';
export const FETCH_PALETTE = 'FETCH_PALETTE';
export const SAVE_PALETTE = 'SAVE_PALETTE';
export const SAVE_PALETTES = 'SAVE_PALETTES';
export const DELETE_PALETTE_FROM_PALETTES = 'DELETE_PALETTE_FROM_PALETTES';

export const fetchPalette = (key, paletteId) => ({
  type: FETCH_PALETTE,
  key,
  paletteId,
});

export const savePalette = (key, palette) => ({
  type: SAVE_PALETTE,
  key,
  palette,
});

export const savePalettes = (key, palettes) => ({
  type: SAVE_PALETTES,
  key,
  palettes,
});

export const deletePaletteFromPalettes = (paletteId) => ({
  type: DELETE_PALETTE_FROM_PALETTES,
  paletteId,
});
