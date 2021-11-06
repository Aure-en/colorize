import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UpdateForm from '../Forms/UpdateForm';
import Modal from '../../../Modal/Modal';

const UpdateModal = ({ isModalOpen, closeModal }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
    <Heading>Update your palette</Heading>
    <UpdateForm />
  </Modal>
);

UpdateModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const Heading = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export default UpdateModal;
