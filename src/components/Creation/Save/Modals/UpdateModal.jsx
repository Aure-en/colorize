import React from 'react';
import PropTypes from 'prop-types';

import UpdateForm from '../Forms/UpdateForm';
import Modal from '../../../Modal/Modal';

const UpdateModal = ({ isModalOpen, closeModal }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
    <UpdateForm />
  </Modal>
);

UpdateModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UpdateModal;
