export const FETCH_PALETTES = 'FETCH_PALETTES';
export const SAVE_PALETTES = 'SAVE_PALETTES';
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY';
export const UPDATE_FILTER_BY = 'UDPATE_FILTER_BY';

export const fetchPalettes = () => ({
  type: FETCH_PALETTES,
});

export const savePalettes = (palettes) => ({
  type: SAVE_PALETTES,
  palettes,
});

export const updateSortBy = (sortBy) => ({
  type: UPDATE_SORT_BY,
  sortBy,
});

export const updateFilterBy = (filterBy) => ({
  type: UPDATE_FILTER_BY,
  filterBy,
});
