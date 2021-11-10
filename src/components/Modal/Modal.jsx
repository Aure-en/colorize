import React from 'react';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import ModalModel from 'react-modal';
import CloseButton from './CloseButton';

const Modal = ({ isModalOpen, closeModal, children }) => {
  const theme = useTheme();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      bottom: 'initial',
      right: 'initial',
      transform: 'translate(-50%, -50%)',
      padding: '3rem',
      maxWidth: '40rem',
      background: theme.background,
    },
    overlay: {
      backgroundColor: `${theme.primaryText}50`,
      zIndex: '50',
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
