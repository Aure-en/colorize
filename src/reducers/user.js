import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYyMjgzNjMsImV4cCI6MTYzNjIzODM2Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.bVqFtQJzVcjucYWvN1S0S8C-v92pJfVb-CdWAIIGDKNbkxgiqNZveqxc29xjZgrvhgozH6e4h_-L1DKisBcOGyYHTeN_lF_8wHNhSZwjS5QBTMA-IhUfMRLandG38n9E-UvyoJogo1ddHz4WyavHkPDnI5sDCKitGeSnhx6SefrCrYihak56aJ6PC0T4oZE7QqyyO5JQoyM3j3vrN_817kSvsz6e-vW6LkOXKCqsGlXkdmhi0APwOlgJWiqF7ntkm_GwdwyS4c7bRXHs_zKRH2GIuh6vibgV5tKJyMxbgWjksBhMEU_WxFNxaQix_zX79HeE-A7VBbK-ORlqLsxhkw',
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
