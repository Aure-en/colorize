export const UPDATE_EXPORT_PALETTE = 'UPDATE_EXPORT_PALETTE';
export const UPDATE_COLOR_FORMAT = 'UPDATE_COLOR_FORMAT';
export const UPDATE_CODE_FORMAT = 'UPDATE_CODE_FORMAT';

export const updateExportPalette = (palette) => ({
  type: UPDATE_EXPORT_PALETTE,
  palette,
});

export const updateColorFormat = (colorFormat) => ({
  type: UPDATE_COLOR_FORMAT,
  colorFormat,
});

export const updateCodeFormat = (codeFormat) => ({
  type: UPDATE_CODE_FORMAT,
  codeFormat,
});
