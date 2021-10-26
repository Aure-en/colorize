export const REORDER_COLORS = 'REORDER_COLORS';
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const SET_SHADES = 'SET_SHADES';

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
