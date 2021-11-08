export const SAVE_USER = 'SAVE_USER';

export const saveUser = (key, user, palettes) => ({
  type: SAVE_USER,
  key,
  user,
  palettes,
});
