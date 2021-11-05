import {
  REQUEST_SIGNUP, successSignUp, REQUEST_LOGIN, successLogin,
} from '../actions/user';

const userMiddleware = (store) => (next) => async (action) => {
  console.log(action);
  switch (action.type) {
    /*case REQUEST_SIGNUP: {
      const { dispatch } = store;
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/`, { method: 'POST', body: JSON.stringify({username, email, password})},);

      const json = await response.json();
      dispatch(successSignUp(user, json));
      break;
    } */

    case REQUEST_LOGIN: {
      console.log('text');
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
