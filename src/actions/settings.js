export const UPDATE_FORMAT = 'UPDATE_FORMAT';
export const UPDATE_CREATION_PAGE = 'UPDATE_CREATION_PAGE';
export const TOGGLE_SWITCHER = 'TOGGLE_SWITCHER';

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
