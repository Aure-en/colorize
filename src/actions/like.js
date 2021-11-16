export const LIKE_PALETTE = 'LIKE_PALETTE';
export const UNLIKE_PALETTE = 'UNLIKE_PALETTE';
export const REQUEST_LIKE_PALETTE = 'REQUEST_LIKE_PALETTE';
export const REQUEST_UNLIKE_PALETTE = 'REQUEST_UNLIKE_PALETTE';

export const likePalette = (paletteId) => ({
  type: LIKE_PALETTE,
  paletteId,
});

export const unlikePalette = (paletteId) => ({
  type: UNLIKE_PALETTE,
  paletteId,
});

export const requestLikePalette = (paletteId) => ({
  type: REQUEST_LIKE_PALETTE,
  paletteId,
});

export const requestUnlikePalette = (paletteId) => ({
  type: REQUEST_UNLIKE_PALETTE,
  paletteId,
});
