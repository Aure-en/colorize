export const SAVE_PALETTE = 'SAVE_PALETTE';
export const UNSAVE_PALETTE = 'UNSAVE_PALETTE';
export const REQUEST_SAVE_PALETTE = 'REQUEST_SAVE_PALETTE';
export const REQUEST_UNSAVE_PALETTE = 'REQUEST_UNSAVE_PALETTE';

export const savePalette = (palette, collectionId) => ({
  type: SAVE_PALETTE,
  palette,
  collectionId,
});

export const unsavePalette = (paletteId) => ({
  type: UNSAVE_PALETTE,
  paletteId,
});

export const requestSavePalette = (paletteId, collectionId) => ({
  type: REQUEST_SAVE_PALETTE,
  paletteId,
  collectionId,
});

export const requestUnsavePalette = (paletteId) => ({
  type: REQUEST_UNSAVE_PALETTE,
  paletteId,
});
