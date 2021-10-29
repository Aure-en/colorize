import { ADD_COPY, REMOVE_COPY } from '../actions/copy';

export const initialState = [];

const settings = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_COPY:
      return [
        ...state,
        {
          x: action.x,
          y: action.y,
          id: action.id,
        },
      ];

    case REMOVE_COPY:
      return [...state].filter((copy) => copy.id !== action.id);

    default:
      return state;
  }
};

export default settings;
