export const getIsModalOpen = (state, name) =>
  state.modals.find((modal) => modal.name === name).isOpen;
