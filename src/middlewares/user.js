import {
  REQUEST_SIGNUP,
  successSignUp,
  REQUEST_LOGIN,
  successLogin,
  requestLogin,
} from '../actions/user';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case REQUEST_SIGNUP: {
      const { dispatch } = store;
      const response = await fetch(`${process.env.REACT_APP_SERVER}/user/`, {
        method: 'POST',
        body: JSON.stringify({
          username: action.username,
          email: action.email,
          password: action.password,
        }),
      });

      const user = await response.json();

      const responseToken = await fetch(
        'http://ec2-174-129-255-79.compute-1.amazonaws.com/projet-o-en-couleurs/public/api/login_check',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: action.email,
            password: action.password,
          }),
        },
      );

      const token = await responseToken.json();
      dispatch(successLogin(action.username, user.id, token, action.email));
      break;
    }

    case REQUEST_LOGIN: {
      const { dispatch } = store;
      const response = await fetch(
        'http://ec2-3-92-209-62.compute-1.amazonaws.com/projet-o-en-couleurs/public/api/login_check',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: action.identifier,
            password: action.password,
          }),
        },
      );

      const loginSuccess = await response.json();
      dispatch(successLogin('admin', 1, loginSuccess.token, 'admin@colorize'));
      break;
    }
    default:
  }

  next(action);
};

export default userMiddleware;
