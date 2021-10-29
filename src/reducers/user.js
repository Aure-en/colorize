import { SUCCESS_LOGIN, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'Anonymous',
  id: '',
  jwt: '',
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
      };

    default:
      return state;
  }
};

export default user;
