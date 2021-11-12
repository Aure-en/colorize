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

      const body = JSON.stringify({
        username: action.username,
        email: action.email,
        password: action.password,
      });

      console.log(body);

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

      const check = await fetch('https://apicolorize.me/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: action.username,
          email: action.email,
          jwt: action.jwt,
        }),
      });

      const json = await response.json();
      const checklog = await check.json();

      console.log(json);
      console.log(checklog);
      console.log(json.data);

      dispatch(
        successEdit(action.username,
          action.email,
          action.jwt,
          json.data.username,
          json.data.email,
          json.token),
      );

      localStorage.setItem(
        'user',
        JSON.stringify({
          username: json.data.username,
          email: json.data.email,
          token: json.token,
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
