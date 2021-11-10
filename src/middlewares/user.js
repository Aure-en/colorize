import {
  REQUEST_SIGNUP,
  successSignUp,
  REQUEST_LOGIN,
  successLogin,
  requestLogin,
  successEdit,
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

      if (response.status === 200) {
        const loginSuccess = await response.json();

        dispatch(
          successLogin(
            loginSuccess.data.username,
            loginSuccess.data.id,
            loginSuccess.token,
            loginSuccess.data.email,
          ),
        );

        localStorage.setItem(
          'user',
          JSON.stringify({
            username: loginSuccess.data.username,
            email: loginSuccess.data.email,
            id: loginSuccess.data.id,
            token: loginSuccess.token,
          }),
        );
      }

      break;
    }

    case EDIT: {
      const { dispatch } = store;
      const { user } = store.getState();

      const body = JSON.stringify({
        username: action.username,
        email: action.email,
        password: action.password,
      });

      console.log(body);

      const response = await fetch(
        `http://apicolorize.me/api/v1/user/${user.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.jwt}`,
          },
          body,
        },
      );

      const json = await response.json();

      console.log(json);
      // dispatch(successEdit(action.username, action.email, action.password));
      break;
    }
    default:
  }

  next(action);
};

export default userMiddleware;
