import { SUCCESS_LOGIN, LOGOUT } from '../actions/user';

export const initialState = {
  username: '',
  id: '',
  jwt: '',
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
