export const SAVE_USER = 'SAVE_USER';

export const saveUser = (key, user) => ({
  type: SAVE_USER,
  key,
  user,
});
