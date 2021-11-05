export const FETCH_THEMES = 'FETCH_THEMES';
export const SAVE_THEMES = 'SAVE_THEMES';

export const fetchThemes = () => ({
  type: FETCH_THEMES,
});

export const saveThemes = (themes) => ({
  type: SAVE_THEMES,
  themes,
});
