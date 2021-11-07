import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYyOTI1MTIsImV4cCI6MTYzNjMwMjUxMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.CoCN3ygepR_crj_9kIxNIW9g0ChCItu6p4PsAujVOYXXBnBHflFKxkl8f1iQTQ4JtmVVaLwEyYqBwmD1W3ol3sOju3MuI3F4vAgCT6nwXGLlYDXyQyYOM6hxU5NEt8nYcZ8Nb81tHjRhetMU7pDC8zT1AMzrWYYSOGoWFXS-gliUyjVRRkVt3_3JbOEdedI1vqpQ1jcEEliY2-pw1g-OlaJ2OhD4dfjzA7uBqBZimdOZIaLgdU5YwVhrNrzLwp5XkThZO5S4R38YowZ8Nt9LSsSTzIO_ISqI21WrC901u9r19N076CISdSASPR_xA7WJv2Nba5kHlxdTHh7kqdkYkg',
  email: 'admin@colorize.com',
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

    default:
      return state;
  }
};

export default user;
