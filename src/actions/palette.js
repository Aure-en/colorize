export const REORDER_COLORS = 'REORDER_COLORS';
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const LOCK_COLOR = 'LOCK_COLOR';
export const UNLOCK_COLOR = 'UNLOCK_COLOR';
export const SET_SHADE = 'SET_SHADE';
export const SET_SHADES = 'SET_SHADES';
export const INCREMENT_SHADES = 'INCREMENT_SHADES';
export const DECREMENT_SHADES = 'DECREMENT_SHADES';

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

export const setShades = () => ({
  type: SET_SHADES,
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
