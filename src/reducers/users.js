import { SAVE_USER } from '../actions/users';

export const initialState = [];

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      // If the key is already present, replace the user.
      if (state.find((page) => page.key === action.key)) {
        return [
          ...state,
        ].map((page) => (page.key === action.key
          ? { key: action.key, user: action.user } : page));
      }

      // If the key was not present, add the key, user and palettes.
      return [
        ...state,
        {
          key: action.key,
          user: action.user,
        },
      ];
    }

    default:
      return state;
  }
};

export default users;
