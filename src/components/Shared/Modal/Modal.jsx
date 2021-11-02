import React from 'react';
import PropTypes from 'prop-types';
import ModalModel from 'react-modal';
import CloseButton from './CloseButton';

const Modal = ({ isModalOpen, closeModal, children }) => {
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
    <ModalModel
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <CloseButton onClick={closeModal} />
      {children}
    </ModalModel>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
