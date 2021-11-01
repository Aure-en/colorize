import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Format from './Format';

const ExportModal = ({ isModalOpen, closeModal, palette }) => {
  const [format, setFormat] = useState('hex');

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
      <Format format={format} setFormat={setFormat} />
    </Modal>
  );
};

ExportModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ExportModal;
