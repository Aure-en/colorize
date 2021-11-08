import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYzNjcwNDQsImV4cCI6MTYzNjM3NzA0NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.eD-ttiLfD0Y4pxLtGKYChVpoa3YxpdyDorjxeD9F0Z4tXq8HVxNKfGCVY_DOBAUad0m3O2DCzxSR5Ym92UAyc79cxnygUCgi0YUbvR8Kd-sj-Iaok7XZ4UmM6hl6-PGg7glTVYaFLG8x-vq0Qxhcv5t8y4f4_v0DIuA0OQeDgMbnxnX8zD0mKHfS1P6IIpdXFPtKBEdBmYV8KfYN7wDTKoUAXcds5bQVbz8SiqdGHi9GIwns53cGx6ER0geq69TUqG4iPPV1TLF_V-Yz8ECf1kQ869PQC4B58O7To3FW1ZF_rye08OK3Aof2QiVyjKxEfqMxxSyWIABeyfa7V3RWEQ',
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
