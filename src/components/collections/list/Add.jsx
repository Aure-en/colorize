import React, { useState } from 'react';
import AddButton from '../add/AddButton';
import AddModal from '../add/AddModal';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <AddButton openModal={() => setIsModalOpen(true)} />
      <AddModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Add;
