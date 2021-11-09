import {
  SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT, EDIT,
} from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzYzOTg2MDIsImV4cCI6MTYzNjQwODYwMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.n9hdJ3ThJ0kbfzOxw5x9_M27G9sysBsyScMKFq0gTTcE7iR-OF7xXoiVTzEz8cGCq_YyWwVLfS1KAyTz2KYFYX9Hbjkn0UOhGXYHxvWYl9WtVFjTRwxyW0odLocBHFb9TzpXMcUJD5ARcaN8zFOLW9dM7TUD-5kq-6Nv1dIAfz4ubp4Z1veh5xHEGuvAYAyiM2JcGqDwHA863wL7B63bEsh7RG8WKJG0nQmhbEazafvBsbBJnidRh_al4hn1Qvgm87LKiOrTW70hNQRbN7cg-oOYMWa8FpKVAUT3kkmlx1IjJReDfQpGlVAEU4_nS-ZZSVaNzIh6cPa28De746EbCQ',
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

    case EDIT:
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
      };

    default:
      return state;
  }
};

export default user;
