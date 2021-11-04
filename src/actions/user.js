export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const SUCCESS_SIGNUP = 'SUCCESS_SIGNUP';
export const LOGOUT = 'LOGOUT';

export const requestLogin = (identifier, password) => ({
  type: REQUEST_LOGIN,
  identifier,
  password,
});

export const successLogin = (username, userId, jwt) => ({
  type: SUCCESS_LOGIN,
  username,
  userId,
  jwt,
});

export const requestSignUp = (username, email, password) => ({
  type: REQUEST_SIGNUP,
  username,
  email,
  password,
});

export const successSignUp = (username, userId, jwt) => ({
  type: SUCCESS_SIGNUP,
  username,
  userId,
  jwt,
});

export const logout = () => ({
  type: LOGOUT,
});