import {
  REQUEST_SIGNUP, successSignUp, REQUEST_LOGIN, successLogin, requestLogin,
} from '../actions/user';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_SIGNUP: {
      const { dispatch } = store;
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/user/`, { method: 'POST', body: JSON.stringify({ username: action.username, email: action.email, password: action.password }) },
      );

      const json = await response.json();
      dispatch(requestLogin(action.username,
        json.id,
        'token'));
      break; }

    case REQUEST_LOGIN: {
      console.log('text2');
      const { dispatch } = store;
      const response = await fetch(
        'http://ec2-3-92-209-62.compute-1.amazonaws.com/projet-o-en-couleurs/public/api/login_check',
        { method: 'POST', body: JSON.stringify({ email: action.identifier, password: action.password }) },
      );

      const loginsuccess = await response.json();
      console.log(loginsuccess);
      dispatch(successLogin(loginsuccess.username,
        loginsuccess.email,
        loginsuccess.jwt,
        loginsuccess.id));
      break;
    }
    default:
  }

  next(action);
};

export default userMiddleware;
