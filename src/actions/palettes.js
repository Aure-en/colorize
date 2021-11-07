export const FETCH_PALETTES = 'FETCH_PALETTES';
export const FETCH_PALETTE = 'FETCH_PALETTE';
export const SAVE_PALETTE = 'SAVE_PALETTE';
export const SAVE_PALETTES = 'SAVE_PALETTES';

export const UPDATE_SORT_BY = 'UPDATE_SORT_BY';
export const UPDATE_FILTER_BY = 'UDPATE_FILTER_BY';
export const UPDATE_LOADING = 'UPDATE_LOADING';

export const DELETE_PALETTE_FROM_PALETTES = 'DELETE_PALETTE_FROM_PALETTES';

export const fetchPalettes = ({
  key, category, filter, sort, page,
}) => ({
  type: FETCH_PALETTES,
  key,
  category,
  filter,
  sort,
  page,
});

export const fetchPalette = (key, paletteId) => ({
  type: FETCH_PALETTE,
  key,
  paletteId,
});

export const savePalette = (key, palette) => ({
  type: SAVE_PALETTE,
  key,
  palette,
});

export const savePalettes = (key, palettes) => ({
  type: SAVE_PALETTES,
  key,
  palettes,
});

export const updateLoading = (loading) => ({
  type: UPDATE_LOADING,
  loading,
});

export const updateSortBy = (sortBy) => ({
  type: UPDATE_SORT_BY,
  sortBy,
});

export const updateFilterBy = (filterBy) => ({
  type: UPDATE_FILTER_BY,
  filterBy,
});

export const deletePaletteFromPalettes = (paletteId) => ({
  type: DELETE_PALETTE_FROM_PALETTES,
  paletteId,
});
