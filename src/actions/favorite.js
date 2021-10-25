export const SAVE_PALETTE = 'SAVE_PALETTE';
export const UNSAVE_PALETTE = 'UNSAVE_PALETTE';

export const savePalette = (paletteId) => ({
  type: SAVE_PALETTE,
  paletteId,
});

export const unsavePalette = (paletteId) => ({
  type: UNSAVE_PALETTE,
  paletteId,
});
