export const SAVE_PALETTE = 'SAVE_PALETTE';
export const UNSAVE_PALETTE = 'UNSAVE_PALETTE';

export const savePalette = (palette, collectionId) => ({
  type: SAVE_PALETTE,
  collectionId,
  palette,
});

export const unsavePalette = (palette) => ({
  type: UNSAVE_PALETTE,
  palette,
});
