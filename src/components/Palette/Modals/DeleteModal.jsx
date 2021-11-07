import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Modal/Modal';
import DeleteForm from '../Forms/DeleteForm';

const DeleteModal = ({ isModalOpen, closeModal, palette }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
    <DeleteForm palette={palette} />
  </Modal>
);

DeleteModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
  }).isRequired,
};

export default DeleteModal;
