export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGOUT = 'LOGOUT';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';

export const submitLogin = (identifier, password) => ({
  type: SUBMIT_LOGIN,
  identifier,
  password,
});

export const successLogin = (username, userId, jwt) => ({
  type: SUCCESS_LOGIN,
  username,
  userId,
  jwt,
});

export const logout = () => ({
  type: LOGOUT,
});
