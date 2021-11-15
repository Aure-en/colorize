import {
  SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT, SUCCESS_EDIT, SET_AUTH_ERROR,
} from '../actions/user';

const localStorageUser = JSON.parse(localStorage.getItem('user'));

export const initialState = {
  username: localStorageUser?.username || '',
  id: localStorageUser?.id || null,
  jwt: localStorageUser?.token || '',
  email: localStorageUser?.email || '',
  error: {
    signUp: '',
    signIn: '',
  },
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

    case SUCCESS_EDIT: {
      return {
        ...state,
        username: action.username,
        email: action.email,
        jwt: action.token,
      };
    }

    case SET_AUTH_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [action.field]: action.error,
        },
      };

    default:
      return state;
  }
};

export default user;
