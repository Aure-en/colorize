import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modals';

export const initialState = [
  {
    name: 'export',
    isOpen: false,
  },
  {
    name: 'auth',
    isOpen: false,
  },
  {
    name: 'createPalette',
    isOpen: false,
  },
];

const modals = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return [...state].map((modal) =>
        modal.name === action.name ? { ...modal, isOpen: true } : modal
      );

    case CLOSE_MODAL:
      return [...state].map((modal) =>
      modal.name === action.name ? { ...modal, isOpen: false } : modal
    );

    default:
      return state;
  }
};

export default modals;
