export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (name) => ({
  type: OPEN_MODAL,
  name,
});

export const closeModal = (name) => ({
  type: CLOSE_MODAL,
  name,
});
