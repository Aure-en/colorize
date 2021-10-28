export const LIKE_PALETTE = 'LIKE_PALETTE';
export const UNLIKE_PALETTE = 'UNLIKE_PALETTE';

export const likePalette = (paletteId) => ({
  type: LIKE_PALETTE,
  paletteId,
});

export const unlikePalette = (paletteId) => ({
  type: UNLIKE_PALETTE,
  paletteId,
});
