export const UPDATE_FORMAT = 'UPDATE_FORMAT';
export const UPDATE_CREATION_PAGE = 'UPDATE_CREATION_PAGE';
export const TOGGLE_SWITCHER = 'TOGGLE_SWITCHER';
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY';
export const UPDATE_FILTER_BY = 'UDPATE_FILTER_BY';

export const updateFormat = (format) => ({
  type: UPDATE_FORMAT,
  format,
});

export const updateCreationPage = () => ({
  type: UPDATE_CREATION_PAGE,
});

export const toggleSwitcher = () => ({
  type: TOGGLE_SWITCHER,
});

export const updateSortBy = (sortBy) => ({
  type: UPDATE_SORT_BY,
  sortBy,
});

export const updateFilterBy = (filterBy) => ({
  type: UPDATE_FILTER_BY,
  filterBy,
});
