export const LIKE_PALETTE = 'LIKE_PALETTE';
export const UNLIKE_PALETTE = 'UNLIKE_PALETTE';

export const likePalette = (palette) => ({
  type: LIKE_PALETTE,
  palette,
});

export const unlikePalette = (palette) => ({
  type: UNLIKE_PALETTE,
  palette,
});
