import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYyNzY5NTYsImV4cCI6MTYzNjI4Njk1Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.g92cqNCmX4n1C1b0xWnY9JGt9PU-xgT001Js0rpEoxHizVS7mXRXb6GXhHmTFn-ByBikfm1lRqg-C4hZhxbI4e2X9GNlEWLJLOJpjfsDJF8y-vWQmE52pRf1UGDKc4brQc7KJDEsIuP7QANr20uRqOIFJbeiEXlEntAR8czBWmhUdqeU_KVUGVLFDXdaQhDETjXgP6AwAaMtp0jukrl1F10Rgf6GSQhWcUYM2vaUIb9XmJLaKf0xU6Ez-GiZvI1ZilBzoB34sXp9Dt_Ers1QAuqF0cCDK7wqmN7fovLdjUq1PN-psZL4tI-K3AZX5ylM23mEBUk0M-ng0_AL7w39Hw',
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
