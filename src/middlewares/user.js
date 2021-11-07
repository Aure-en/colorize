import {
  REQUEST_SIGNUP, successSignUp, REQUEST_LOGIN, successLogin,
} from '../actions/user';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_SIGNUP: {
      const responseAPI = {
        username: 'username',
        email: 'email',
        jwt: 'monsupertoken',
        id: 1,
      };

      store.dispatch(successSignUp(responseAPI.username, responseAPI.id, responseAPI.jwt));

      break;
    }

    case REQUEST_LOGIN: {
      const responseAPI = {
        username: 'username',
        email: 'email',
        jwt: 'monsupertoken',
        id: 1,
      };

      store.dispatch(successLogin(responseAPI.username, responseAPI.id, responseAPI.jwt));
      break;
    }
    default:
  }

  next(action);
};

export default userMiddleware;
