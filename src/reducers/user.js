import {
  SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT, EDIT,
} from '../actions/user';

export const initialState = {
  username: '',
  id: null,
  jwt: '',
  email: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        username: action.username,
        id: action.userId,
        jwt: action.jwt,
        email: action.email,
      };

    case LOGOUT:
      return {
        ...state,
        username: '',
        id: null,
        jwt: '',
        email: '',
      };

    case SUCCESS_SIGNUP:
      return {
        ...state,
        username: action.username,
        id: action.userId,
        jwt: action.jwt,
      };

    case EDIT:
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
      };

    default:
      return state;
  }
};

export default user;
