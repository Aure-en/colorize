export const FETCH_THEMES = 'FETCH_THEMES';
export const SAVE_THEMES = 'SAVE_THEMES';
export const SAVE_THEME_PALETTES = 'SAVE_THEME_PALETTES';
export const SET_THEMES_LOADING = 'SET_THEMES_LOADING';

export const fetchThemes = () => ({
  type: FETCH_THEMES,
});

export const saveThemes = (themes) => ({
  type: SAVE_THEMES,
  themes,
});

export const saveThemePalettes = (key, palettes) => ({
  type: SAVE_THEME_PALETTES,
  key,
  palettes,
});

export const setThemesLoading = (loading) => ({
  type: SET_THEMES_LOADING,
  loading,
});
