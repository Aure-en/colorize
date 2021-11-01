export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (palette) => ({
  type: OPEN_MODAL,
  palette,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
