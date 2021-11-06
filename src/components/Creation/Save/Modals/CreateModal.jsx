import React from 'react';

import SaveForm from './CreateForm';
import Modal from '../../../Shared/Modal/Modal';

const SaveModal = ({ isModalOpen, closeModal }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
    <SaveForm />
  </Modal>
);

export default SaveModal;
