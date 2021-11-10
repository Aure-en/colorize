export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const SUCCESS_SIGNUP = 'SUCCESS_SIGNUP';
export const LOGOUT = 'LOGOUT';
export const EDIT = 'EDIT';
export const SUCCESS_EDIT = 'SUCCESS_EDIT';

export const requestLogin = (identifier, password) => ({
  type: REQUEST_LOGIN,
  identifier,
  password,
});

export const successLogin = (username, userId, jwt, email) => ({
  type: SUCCESS_LOGIN,
  username,
  userId,
  jwt,
  email,
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

export const edit = ({ username, email, password }) => ({
  type: EDIT,
  username,
  email,
  password,
});

export const successEdit = ({ username, email, password, jwt }) => ({
  type: SUCCESS_EDIT,
  username,
  email,
  password,
  jwt,
});
