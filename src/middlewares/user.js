import {
  REQUEST_SIGNUP,
  successSignUp,
  REQUEST_LOGIN,
  successLogin,
  requestLogin,
  EDIT,
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
        'https://apicolorize.me/api/login_check',
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
      const response = await fetch('https://apicolorize.me/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: action.identifier,
          password: action.password,
        }),
      });

      const loginSuccess = await response.json();
      dispatch(
        successLogin(
          loginSuccess.data.username,
          loginSuccess.data.id,
          loginSuccess.token,
          loginSuccess.data.email,
        ),
      );
      break;
    }

    case EDIT: {
      const { dispatch } = store;
      const { user } = store.getState();
      const response = await fetch(
        `http://apicolorize.me/api/v1/user/${user.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: action.username,
            email: action.email,
            password: action.password,
          }),
        },
      );

      const edit = await response.json();
      dispatch(edit(action.username, action.email, action.password));
      break;
    }
    default:
  }

  next(action);
};

export default userMiddleware;
