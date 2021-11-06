import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CreateForm from '../Forms/CreateForm';
import Modal from '../../../Modal/Modal';

const CreateModal = ({ isModalOpen, closeModal }) => (
  <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
    <Heading>Create a palette</Heading>
    <CreateForm />
  </Modal>
);

CreateModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const Heading = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export default CreateModal;
