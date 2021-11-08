import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYzODg5MTEsImV4cCI6MTYzNjM5ODkxMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.SxTjDJucANm_AhnCoiFnPHJF1JD_ylwtR39ceEBJBaixxLzKIdE-f39wuiH8bBAqTmkRNbRBXc2zXujoaS56V8nGpmY8_Ou3ALdJzHt9a8E8JrHsI_pNyAPImC37BzsaHx6UsMY7zEunUnpigl2kk3xdSEYBMnYn_UxurzMYyQ_S1QkfgV36p-PqBdF4Fkop3FDcNdVLA0AmRjm1XLpYbIYEU68vs9mnb2BCQTPzIiA8WtM_l6ifRMQP6qQDjSRs_DUIOyH0wcfcnQmV-1Ah0zXz05OLK1_xBfRUcmt5Bzppg2_Psaj1LW1Noi8iE-7ho8-Yv8GVMxe3AIpf9WLFFw',
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
