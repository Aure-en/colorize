import React, { useState } from 'react';
import Modal from 'react-modal';
import AddButton from './AddButton';
import AddModal from './AddModal';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div>
      <AddButton openModal={() => setIsModalOpen(true)} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
      >
        <AddModal closeModal={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Add;
