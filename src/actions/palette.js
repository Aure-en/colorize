export const SET_MAIN_PALETTE = 'SET_MAIN_PALETTE';
export const SET_ORIGINAL_PALETTE = 'SET_ORIGINAL_PALETTE';
export const SET_MODAL_PALETTE = 'SET_MODAL_PALETTE';
export const RESET_PALETTE = 'RESET_PALETTE';
export const REORDER_COLORS = 'REORDER_COLORS';
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const REMOVE_COLOR = 'REMOVE_COLOR';
export const ADD_COLOR = 'ADD_COLOR';

export const LOCK_COLOR = 'LOCK_COLOR';
export const UNLOCK_COLOR = 'UNLOCK_COLOR';

export const SET_SHADE = 'SET_SHADE';
export const SET_SHADES = 'SET_SHADES';
export const INCREMENT_SHADES = 'INCREMENT_SHADES';
export const DECREMENT_SHADES = 'DECREMENT_SHADES';

export const FETCH_FIRST_PALETTE = 'FETCH_FIRST_PALETTE';
export const SET_PALETTE_LOADING = 'SET_PALETTE_LOADING';

export const setMainPalette = (palette) => ({
  type: SET_MAIN_PALETTE,
  palette,
});

export const setOriginalPalette = (palette) => ({
  type: SET_ORIGINAL_PALETTE,
  palette,
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

export const setModalPalette = (palette) => ({
  type: SET_MODAL_PALETTE,
  palette,
});

export const fetchFirstPalette = () => ({
  type: FETCH_FIRST_PALETTE,
});

export const setPaletteLoading = (loading) => ({
  type: SET_PALETTE_LOADING,
  loading,
});

export const removeColor = (position) => ({
  type: REMOVE_COLOR,
  position,
});

export const addColor = () => ({
  type: ADD_COLOR,
});
