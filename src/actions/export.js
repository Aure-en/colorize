export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPDATE_COLOR_FORMAT = 'UPDATE_COLOR_FORMAT';
export const UPDATE_CODE_FORMAT = 'UPDATE_CODE_FORMAT';

export const openModal = (palette) => ({
  type: OPEN_MODAL,
  palette,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const updateColorFormat = (colorFormat) => ({
  type: UPDATE_COLOR_FORMAT,
  colorFormat,
});

export const updateCodeFormat = (codeFormat) => ({
  type: UPDATE_CODE_FORMAT,
  codeFormat,
});
