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

      const login = await fetch('https://apicolorize.me/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: action.email,
          password: action.password,
        }),
      });

      const json = await login.json();
      dispatch(
        successLogin(
          json.data.username,
          json.data.id,
          json.token,
          json.data.email,
        ),
      );

      localStorage.setItem(
        'user',
        JSON.stringify({
          username: json.data.username,
          email: json.data.email,
          id: json.data.id,
          token: json.token,
        }),
      );
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
        const json = await response.json();

        dispatch(
          successLogin(
            json.data.username,
            json.data.id,
            json.token,
            json.data.email,
          ),
        );

        localStorage.setItem(
          'user',
          JSON.stringify({
            username: json.data.username,
            email: json.data.email,
            id: json.data.id,
            token: json.token,
          }),
        );
      }

      break;
    }

    case EDIT: {
      const { dispatch } = store;
      const { user } = store.getState();
      const response = await fetch(
        `http://apicolorize.me/projet-o-en-couleurs/public/api/v1/user/${user.id}`,
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
