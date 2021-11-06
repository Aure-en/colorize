import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYyMTI4NjcsImV4cCI6MTYzNjIyMjg2Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.SaoQ8qkaqmTfl3NHyXo9C7H4EJYuqzfNWeKTHc3ripPV_KgGWqLJWAGl2_7Z-9RqLbw5P8Ima0xNDZXCZZP3F6BqfAIbgzmInhuzpShcwLUXGqTxkZwrLnUEIHTwqOYv8BZXq0BQ7tokbcaT7SHFc3LAnx__fp1dSGRvONEDv58ahTAV80-Vn8jYwsZVpTLZ5aabN_pCeCwW9Xw1gfRH3fz2IyHFJOz2wYhrMyWSnoygG3nH6dUpvYwLBZMQvNAUuFRHJosOTQaoJg6dZIvwuKTGA8uQzwCfPyaxl1kBv-tpowYH3OfNE98nh3gawtcjQtp3sy4zXaAuDc6MMzhLmA',
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
