import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzY0NDY3NTQsImV4cCI6MTYzNjQ1Njc1NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.Ta-nQdqhwN-05lVxyjAbPrYBBHkiLcfxP_K0ka0uIV-5LEvj318jF82DmkY94y56c7no-J-pU3fKRD3GeixWq4BeT1-2jjklqAK3d9OUx1yvbWhs3vn5lnpAGFQWonC-XUAbjmUk4A-I_9dsAUxTiDZeC6AGQc2QdNxMys-bDasj-A7oGoq5aquqgXewjbSoqC1RHF__9jKHetMfLRQmBgEUB1uNiPioH4yC_lpOJixS0weWVXMbzz6dTeTNeJJZ2IiqpLZXZQA1M1-oaetZ5PgcLzbCUFbPFlLCQPQ8vIq5CrIjxFYCq18iwccvsBKGywiqbg1AXau8Fya5EihaCQ',
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
