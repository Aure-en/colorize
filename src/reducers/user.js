import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYzNjI2MzIsImV4cCI6MTYzNjM3MjYzMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.xrL0sa8t40xGnovvWR8XDNx2uB-7ULAsdsEg1LXGJCTy5Ml-f1yxyPp6w7A6d0erJov1qXVTPzsdhAtoIEHeJIip6SUHdZ-yiClsQLR4o9C7jOfUjq4fKdUrWWNzEQzOV2EWVn-fP8_ZWpE4mzY4e6hNOD3JGayl2WPrm4ycIlpZSoMZQpLq7MvGKDr8kF5HF6YOmcASFaWd-QttRCsxUZsGs5IDMj7oeW-54bEouANCc-wrTTHDKFUpXNjhK-1ASqL918Hx7O7UEo_Sj829m1AX5iwQI-QEUNB3bY4prnmdDGdmxlLa-F5EhWaLbjTFq_weaIk9lYH-Am5QHj4jwA',
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
