import {
  REQUEST_SIGNUP,
  successSignUp,
  REQUEST_LOGIN,
  successLogin,
  requestLogin,
  successEdit,
  EDIT,
  SUCCESS_EDIT,
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

      // Le champ qu'on veut éditer
      // Email de l'utilisateur
      // Mot de passe de l'utilisateur

      const loginCheck = await fetch(
        'https://apicolorize.me/api/login_check',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            password: action.password,
          }),
        },
      );

      const loginCheckJson = await loginCheck.json();

      // Login was not done because password was incorrect.
      if (loginCheckJson.status === 400) {
        return;
      }

      const body = JSON.stringify({
        username: action.username,
        email: action.email,
        newPassword: action.newPassword,
      });

      const response = await fetch(
        `https://apicolorize.me/api/v1/user/${user.id}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
          body,
        },
      );

      const json = await response.json();

      const check = await fetch(
        'https://apicolorize.me/api/login_check',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: action.email || user.email,
            password: action.password,
          }),
        },
      );

      const checkJson = await check.json();

      dispatch(
        successEdit({
          username: action.username || checkJson.data.username,
          email: action.email || checkJson.data.email,
          token: checkJson.token,
        }),
      );

      localStorage.setItem(
        'user',
        JSON.stringify({
          username: action.username || checkJson.data.username,
          email: action.email || checkJson.data.email,
          token: checkJson.token,
          id: user.id,
        }),
      );

      break;
    }

    /* case SUCCESS_EDIT: {
     const { dispatch } = store;
      if (response.status === 200) {
        const json = await response.json();

        dispatch(
          successEdit(
            json.data.username,
            json.data.email,
            json.token,
          ),
        );
  localStorage.setItem(
          'user',
          JSON.stringify({
            username: json.data.username,
            email: json.data.email,
            token: json.token,
          }),
        );
      }

      break;
    } */

    default:
  }

  next(action);
};

export default userMiddleware;
