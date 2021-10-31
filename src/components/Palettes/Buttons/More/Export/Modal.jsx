import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const ExportModal = ({ isModalOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      bottom: 'initial',
      right: 'initial',
      transform: 'translate(-50%, -50%)',
      padding: '3rem',
      maxWidth: '50rem',
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      modal
    </Modal>
  );
};

ExportModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ExportModal;
