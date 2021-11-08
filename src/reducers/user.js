import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYzNzg4MTMsImV4cCI6MTYzNjM4ODgxMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.WwtnEbL8F0TCok5eyeVXA8a9MrZFLWrjIZD3SeD89q1yTyjazemkZvzQhx8dn01j2KjmI-wxzPS32lHfe_qLtPrlqZrENWRjOKpdf4gXaVa704LuZ2Vgx51NHmkxEg4i3OcnDNHgv-gHVqxDs9Un-Blz7FGTSOEYWu9bS3lIYle4gXmBlLmV-VPp9JTJlVqpcuoUKcw25W2Soi226h-wSpZRdEmpnOfh6_AyTRnmEMZzt7dKlHI178HqQOMe5MWmlIAFSLWtBiMtShBda773HjKln3IAW7wjwuC8-kUU6IwMUU8XWbC9hp5upYjoOS10N1OFlAii28eHlg6G-fTNRw',
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
