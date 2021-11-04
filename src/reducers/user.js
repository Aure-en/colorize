import { SUCCESS_LOGIN, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'Username',
  id: 1,
  jwt: 'JWT',
  email: 'Email',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        username: action.username,
        id: action.userId,
        jwt: action.jwt,
      };

    case LOGOUT:
      return {
        ...state,
        username: '',
        id: '',
        jwt: '',
        email: '',
      };

    default:
      return state;
  }
};

export default user;
