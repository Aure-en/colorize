export const REORDER_COLORS = 'REORDER_COLORS';
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const SET_SHADES = 'SET_SHADES';
export const INCREMENT_SHADES = 'INCREMENT_SHADES';
export const DECREMENT_SHADES = 'DECREMENT_SHADES';

export const reorderColor = (from, to) => ({
  type: REORDER_COLORS,
  from,
  to,
});

export const updateColor = (position, color) => ({
  type: UPDATE_COLOR,
  position,
  color,
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
