export const SET_PALETTE = 'SET_PALETTE';
export const SET_ORIGINAL_PALETTE = 'SET_ORIGINAL_PALETTE';
export const FETCH_PALETTE = 'FETCH_PALETTE';
export const RESET_PALETTE = 'RESET_PALETTE';
export const REORDER_COLORS = 'REORDER_COLORS';
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const LOCK_COLOR = 'LOCK_COLOR';
export const UNLOCK_COLOR = 'UNLOCK_COLOR';
export const SET_SHADE = 'SET_SHADE';
export const SET_SHADES = 'SET_SHADES';
export const INCREMENT_SHADES = 'INCREMENT_SHADES';
export const DECREMENT_SHADES = 'DECREMENT_SHADES';

export const setPalette = (palette) => ({
  type: SET_PALETTE,
  palette,
});

export const setOriginalPalette = (palette) => ({
  type: SET_ORIGINAL_PALETTE,
  palette,
});

export const fetchPalette = () => ({
  type: FETCH_PALETTE,
});

export const resetPalette = () => ({
  type: RESET_PALETTE,
});

export const reorderColor = (from, to) => ({
  type: REORDER_COLORS,
  from,
  to,
});

export const updateColor = (index, colorHex) => ({
  type: UPDATE_COLOR,
  index,
  color: colorHex,
});

export const setShade = (index, colorHex) => ({
  type: SET_SHADE,
  color: colorHex,
  index,
});

export const setShades = (palette) => ({
  type: SET_SHADES,
  palette,
});

export const incrementShades = () => ({
  type: INCREMENT_SHADES,
});

export const decrementShades = () => ({
  type: DECREMENT_SHADES,
});

export const lockColor = (index) => ({
  type: LOCK_COLOR,
  index,
});

export const unlockColor = (index) => ({
  type: UNLOCK_COLOR,
  index,
});
