import { SUCCESS_LOGIN, SUCCESS_SIGNUP, LOGOUT } from '../actions/user';

export const initialState = {
  username: 'admin',
  id: 1,
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzY0NTY5MjAsImV4cCI6MTYzNjQ2NjkyMCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYWRtaW5AY29sb3JpemUuY29tIn0.Gbvy_ne5igKfuXqFF0Ws66MN6jbMJ_RN62NdyGjpuhmr4rIakbKvqPlT0Q96zt_rxoIqF_O8C6N5d8FSmS6O4xoQFuCAelsLrtoO-kyJcFda0LxWq2i1TusjWy8WXWD7NIo4rSxIKKnfQWPkc8FzOLuyLiGXVAks0LrwPI6D8UXCy5hh416NMaDmxH3rLubU6wngr16VRdQiQCvOdMW_n8Cr1vl0vXC8w5KwcBjg87xWBizNCm9FJVUuQzCZqlJ22_z2yPE-ZVtozkM99OuaJzFdbU2CeNzdzUi3dQ0oO5ZyiDuTAeSv2cp6isplRWopieVaTAFZGn7tWCJfpVj_FQ',
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
